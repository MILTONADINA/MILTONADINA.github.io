import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Projects, { MoreProjects } from '@/components/Projects';
import { Skills, Experience, Education, Contact } from '@/components/Sections';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Projects />
        <MoreProjects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}
