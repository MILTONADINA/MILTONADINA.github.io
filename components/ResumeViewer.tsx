"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import type { PDFDocumentProxy, RenderTask, TextLayer } from 'pdfjs-dist';

const FILE = '/resume/Milton_Adina_Shisia_Resume.pdf';

function ResumePage({ pdf, number, width, onReady, onError }: {
  pdf: PDFDocumentProxy; number: number; width: number;
  onReady: (number: number) => void; onError: () => void;
}) {
  const surface = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let cancelled = false;
    let task: RenderTask | undefined;
    let textLayer: TextLayer | undefined;
    async function render() {
      const pdfjs = await import('pdfjs-dist');
      const page = await pdf.getPage(number);
      if (cancelled) return;
      const viewport = page.getViewport({ scale: width / page.getViewport({ scale: 1 }).width });
      const pixelScale = Math.max(2, 2448 / width);
      const canvas = document.createElement('canvas');
      canvas.width = Math.floor(viewport.width * pixelScale);
      canvas.height = Math.floor(viewport.height * pixelScale);
      canvas.style.width = `${viewport.width}px`;
      canvas.style.height = `${viewport.height}px`;
      canvas.setAttribute('aria-hidden', 'true');
      task = page.render({ canvas, viewport, transform: [pixelScale, 0, 0, pixelScale, 0, 0] });
      await task.promise;
      if (cancelled) return;
      const content = document.createElement('div');
      content.className = 'textLayer';
      content.style.setProperty('--total-scale-factor', String(viewport.scale));
      const textContent = await page.getTextContent();
      if (cancelled) return;
      textLayer = new pdfjs.TextLayer({ textContentSource: textContent, container: content, viewport });
      await textLayer.render();
      if (cancelled) return;
      const links = document.createElement('div');
      links.className = 'pdf-links';
      const seenLinks: { url: string; rect: number[] }[] = [];
      for (const annotation of await page.getAnnotations()) {
        if (annotation.subtype !== 'Link' || !annotation.url || !/^(https?:|mailto:)/.test(annotation.url)) continue;
        const normalizedUrl = new URL(annotation.url).href;
        if (seenLinks.some(link => link.url === normalizedUrl && link.rect.every((value, index) => Math.abs(value - annotation.rect[index]) < 1))) continue;
        seenLinks.push({ url: normalizedUrl, rect: annotation.rect });
        const [x1, y1] = viewport.convertToViewportPoint(annotation.rect[0], annotation.rect[1]);
        const [x2, y2] = viewport.convertToViewportPoint(annotation.rect[2], annotation.rect[3]);
        const link = document.createElement('a');
        link.href = annotation.url;
        if (!annotation.url.startsWith('mailto:')) { link.target = '_blank'; link.rel = 'noreferrer'; }
        link.setAttribute('aria-label', annotation.url.replace(/^https?:\/\//, '').replace(/^mailto:/, ''));
        link.style.left = `${Math.min(x1, x2)}px`;
        link.style.top = `${Math.min(y1, y2)}px`;
        link.style.width = `${Math.abs(x2 - x1)}px`;
        link.style.height = `${Math.abs(y2 - y1)}px`;
        links.append(link);
      }
      if (cancelled || !surface.current) return;
      surface.current.replaceChildren(canvas, content, links);
      onReady(number);
    }
    render().catch(error => {
      if (!cancelled && error?.name !== 'RenderingCancelledException') onError();
    });
    return () => { cancelled = true; task?.cancel(); textLayer?.cancel(); };
  }, [pdf, number, width, onReady, onError]);

  return <figure className="resume-sheet" style={{ width }}>
    <figcaption className="page-number mb-3 text-sm font-medium text-slate-300">Page {number} of {pdf.numPages}</figcaption>
    <div ref={surface} className="pdf-page-surface" role="document" aria-label={`Résumé page ${number}`} style={{ width, height: width * 792 / 612 }} />
  </figure>;
}

export default function ResumeViewer() {
  const [pdf, setPdf] = useState<PDFDocumentProxy | null>(null);
  const [failed, setFailed] = useState(false);
  const [readyPages, setReadyPages] = useState<number[]>([]);
  const [fitWidth, setFitWidth] = useState(816);
  const [zoom, setZoom] = useState(1);
  const region = useRef<HTMLDivElement>(null);
  const onReady = useCallback((number: number) => setReadyPages(pages => pages.includes(number) ? pages : [...pages, number]), []);
  const onError = useCallback(() => setFailed(true), []);

  useEffect(() => {
    let stopped = false;
    let loading: ReturnType<typeof import('pdfjs-dist')['getDocument']> | undefined;
    async function load() {
      const pdfjs = await import('pdfjs-dist');
      if (stopped) return;
      pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();
      loading = pdfjs.getDocument({ url: FILE });
      const document = await loading.promise;
      if (!stopped) setPdf(document);
    }
    load().catch(() => { if (!stopped) setFailed(true); });
    return () => { stopped = true; void loading?.destroy(); };
  }, []);

  useEffect(() => {
    if (!region.current) return;
    const observer = new ResizeObserver(entries => {
      const width = Math.max(240, Math.min(816, entries[0].contentRect.width - 32));
      setFitWidth(Math.floor(width));
      setZoom(value => Math.min(value, width < 500 ? 4 : 2));
    });
    observer.observe(region.current);
    return () => observer.disconnect();
  }, []);

  const maxZoom = fitWidth < 500 ? 4 : 2;
  const ready = Boolean(pdf && readyPages.length === pdf.numPages && !failed);
  return <div className="resume-viewer">
    <div className="viewer-controls sticky top-[88px] z-30 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-ink-600 bg-ink-900 p-4">
      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={() => window.print()} disabled={!ready} className="button-primary">Print résumé</button>
        <a href={FILE} download="Milton_Adina_Shisia_Resume.pdf" type="application/pdf" className="button-secondary">Download PDF</a>
      </div>
      <div className="flex items-center gap-2" role="group" aria-label="Résumé zoom">
        <button type="button" aria-label="Zoom out" disabled={zoom <= 0.75} onClick={() => setZoom(value => Math.max(.75, value - .25))} className="button-secondary min-w-11 px-3">−</button>
        <output aria-live="polite" className="min-w-12 text-center text-sm text-slate-200">{Math.round(zoom * 100)}%</output>
        <button type="button" aria-label="Zoom in" disabled={zoom >= maxZoom} onClick={() => setZoom(value => Math.min(maxZoom, value + .25))} className="button-secondary min-w-11 px-3">+</button>
        <button type="button" onClick={() => setZoom(1)} className="button-secondary px-3 text-sm">Fit width</button>
      </div>
    </div>
    <p className="viewer-status my-4 text-sm leading-relaxed text-slate-300" role="status">
      {failed ? <>The preview could not load. <a className="text-link" href={FILE} target="_blank" rel="noreferrer">Open the PDF in your browser</a> or use Download PDF.</> : ready ? 'Two pages. Use the zoom controls for a closer view.' : 'Loading résumé…'}
    </p>
    <noscript><p className="my-5">To view this résumé without JavaScript, <a href={FILE} className="text-link">open the PDF</a>.</p></noscript>
    <div ref={region} className="resume-pages overflow-auto rounded-xl border border-ink-700 bg-ink-900/70 p-4" role="region" aria-label="Résumé pages" tabIndex={0}>
      {pdf && !failed && Array.from({ length: pdf.numPages }, (_, index) => <ResumePage key={index} pdf={pdf} number={index + 1} width={Math.round(fitWidth * zoom)} onReady={onReady} onError={onError} />)}
      {!pdf && !failed && <div className="min-h-[480px]" aria-hidden="true" />}
    </div>
    <p className="resume-chrome mt-5 text-sm text-slate-300">Prefer your browser&apos;s PDF reader? <a href={FILE} target="_blank" rel="noreferrer" className="text-link">Open the original PDF <span aria-hidden="true">↗</span></a></p>
  </div>;
}
