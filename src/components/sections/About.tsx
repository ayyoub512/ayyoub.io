"use client";
import React from 'react';

export default function About() {
  return (
    <section id="about" className="section" style={{ position: 'relative', zIndex: 10 }}>
       <div className="fluid-glow fluid-glow-about"></div>
       
       {/* Subtly Scattered Native Shapes */}
       <div className="shape-layer" style={{ position: 'absolute' }}>
         <div className="shape" style={{ top: '15%', right: '5%', opacity: 0.03, fontSize: '3rem' }}>○</div>
         <div className="shape" style={{ bottom: '10%', left: '8%', opacity: 0.03, fontSize: '2rem' }}>✕</div>
       </div>
       
       <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="scroll-reveal"><span className="text-gradient">01.</span> About Me</h2>
          
          <div className="grid-bento">
            {/* Mission Statement (Large Span) */}
            <div className="bento-card bento-col-span-8 bento-row-span-2 scroll-reveal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="bento-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              </div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Bridging the gap between design & engineering.</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                I'm a Full Stack Engineer who obsessively focuses on both pixel-perfect frontends and scalable, bulletproof backends. I don't just write code; I look at the holistic product experience to ensure what we build is beautiful, fast, and secure.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
                When I'm not architecting cloud infrastructure or refining CSS micro-interactions, I'm usually exploring new open-source tooling.
              </p>
            </div>

            {/* Core Arsenal (Tag Cloud) */}
            <div className="bento-card bento-col-span-4 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="bento-icon" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Core Arsenal</h4>
              <ul className="list-tech-tags">
                <li>TypeScript</li>
                <li>React / Next.js</li>
                <li>Node / Express</li>
                <li>AWS Cloud</li>
                <li>PostgreSQL</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            {/* Approach (Bottom Wide) */}
            <div className="bento-card bento-col-span-4 scroll-reveal" style={{ transitionDelay: '0.2s', background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}>
               <div className="bento-icon" style={{ background: 'rgba(167, 139, 250, 0.1)', color: '#a78bfa' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Impact Driven</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>I measure success not by lines of code, but by the tangible business value and user satisfaction delivered.</p>
            </div>
          </div>
       </div>
    </section>
  );
}
