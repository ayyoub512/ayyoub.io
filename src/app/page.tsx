"use client";
import React, { useEffect, useState } from 'react';

// Shared UI
import Navbar from '@/components/ui/Navbar';
import ProjectModal from '@/components/ui/ProjectModal';

// Major Sections
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Certifications from '@/components/sections/Certifications';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

export default function Home() {
  // Track active section for ScrollSpy Navbar
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Scroll Reveal Observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      revealObserver.observe(el);
    });

    // ScrollSpy Observer for Navbar
    const scrollSpyObserver = new IntersectionObserver(
      (entries) => {
        // Find the section that is most visible
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Section must be 50% visible to be considered active
    );

    document.querySelectorAll('section[id]').forEach((el) => {
      scrollSpyObserver.observe(el);
    });

    return () => {
      revealObserver.disconnect();
      scrollSpyObserver.disconnect();
    };
  }, []);

  // Global State for Full-Screen Project Gallery Modal
  const [activeScreenshots, setActiveScreenshots] = useState<string[] | null>(null);
  const [modalSlideIndex, setModalSlideIndex] = useState(0);

  return (
    <main style={{ overflowX: 'hidden', width: '100vw' }}>
      <ProjectModal 
        activeScreenshots={activeScreenshots} 
        setActiveScreenshots={setActiveScreenshots} 
        modalSlideIndex={modalSlideIndex} 
        setModalSlideIndex={setModalSlideIndex} 
      />
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Projects setActiveScreenshots={setActiveScreenshots} />
      <Skills />
      <Contact />
    </main>
  );
}
