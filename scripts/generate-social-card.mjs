import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createElement as h } from 'react';
import { ImageResponse } from 'next/og.js';

// Uses the font bundled with Next.js. No remote assets or fonts are fetched.
const output = fileURLToPath(new URL('../public/og.png', import.meta.url));
const width = 1200;
const height = 630;

const card = h(
  'div',
  {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '58px 68px 52px',
      backgroundColor: '#091321',
      backgroundImage: 'linear-gradient(125deg, #122c4b 0%, #091321 58%, #102b38 100%)',
      color: '#edf4fc',
      fontFamily: 'sans-serif',
    },
  },
  h('div', {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width,
      height: 6,
      backgroundImage: 'linear-gradient(90deg, #438cf5, #20cedd)',
    },
  }),
  h(
    'div',
    { style: { display: 'flex', alignItems: 'center', gap: 13 } },
    h('div', { style: { width: 9, height: 9, borderRadius: 5, backgroundColor: '#39d4e1' } }),
    h('span', { style: { fontSize: 17, letterSpacing: 4, color: '#9db7d5' } }, 'PORTFOLIO'),
  ),
  h(
    'div',
    { style: { display: 'flex', flexDirection: 'column', gap: 18 } },
    h(
      'div',
      { style: { display: 'flex', fontSize: 70, fontWeight: 700, letterSpacing: -2, lineHeight: 1.12 } },
      'Milton Adina Shisia',
    ),
    h(
      'div',
      { style: { display: 'flex', fontSize: 30, color: '#52d8e5', lineHeight: 1.3 } },
      'Full-Stack & Security-Focused Software Engineer',
    ),
    h(
      'div',
      { style: { display: 'flex', fontSize: 24, color: '#c0cfe0', lineHeight: 1.4 } },
      'Web · Mobile · Application security · Developer tools',
    ),
  ),
  h(
    'div',
    {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        borderTop: '1px solid #344b61',
        paddingTop: 26,
      },
    },
    h(
      'div',
      { style: { display: 'flex', flexDirection: 'column', gap: 8 } },
      h('span', { style: { fontSize: 22, color: '#dde8f4' } }, 'Computer Science (Cybersecurity)'),
      h('span', { style: { fontSize: 20, color: '#9fb3ca' } }, 'Oklahoma Christian University'),
    ),
    h('span', { style: { fontSize: 21, color: '#78b8fa' } }, 'miltonadina.github.io'),
  ),
);

const response = new ImageResponse(card, { width, height });
await writeFile(output, Buffer.from(await response.arrayBuffer()));
console.log(`Generated ${output} (${width} × ${height})`);
