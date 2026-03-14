"use client";
import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '6rem', textAlign: 'center', position: 'relative', zIndex: 5 }}>
      
      {/* Animated Geometric Web Background */}
      <div className="hero-geometric-bg">
         <div className="hero-ring hero-ring-1"></div>
         <div className="hero-ring hero-ring-2"></div>
         <div className="hero-ring hero-ring-3"></div>
         <div className="hero-ring hero-ring-4"></div>
      </div>
      
      {/* Anti-Gravity Shapes */}
      <div className="shape-layer">
        <svg className="shape shape-1" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6"><circle cx="50" cy="50" r="40"/></svg>
        <svg className="shape shape-2" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6"><polygon points="50,10 90,90 10,90"/></svg>
        <svg className="shape shape-3" viewBox="0 0 100 100" fill="currentColor"><circle cx="20" cy="20" r="10"/><circle cx="80" cy="20" r="10"/><circle cx="50" cy="80" r="10"/></svg>
        <svg className="shape shape-4" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8"><line x1="20" y1="50" x2="80" y2="50"/><line x1="50" y1="20" x2="50" y2="80"/></svg>
        <svg className="shape shape-5" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6"><rect x="25" y="25" width="50" height="50" rx="10"/></svg>
        <svg className="shape shape-6" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6"><polygon points="50,5 95,50 50,95 5,50"/></svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Hero Content */}
        <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="badge animate-fade-in" style={{ marginBottom: '2rem' }}>
            ✦ Available for new opportunities
          </div>
          <h1 className="animate-fade-in delay-1" style={{ marginBottom: '1.5rem', maxWidth: '900px', fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: '1.1' }}>
            Building digital experiences that <br />
            <div className="word-slider-container text-gradient">
              <div className="word-slider">
                <span>inspire.</span>
                <span>scale.</span>
                <span>convert.</span>
                <span>innovate.</span>
                <span>inspire.</span>
              </div>
            </div>
          </h1>
          <p className="animate-fade-in delay-2" style={{ fontSize: '1.3rem', marginBottom: '3rem', maxWidth: '600px', color: 'var(--text-secondary)' }}>
            I'm a Full-Stack Web Developer with 4+ years of experience building high-traffic websites, custom web applications, and scalable cloud architectures.
          </p>
          <div className="animate-fade-in delay-3" style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
               Resume
            </a>
            <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
               <a href="https://www.linkedin.com/in/ouakkaha" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
               </a>
               <a href="https://www.upwork.com/freelancers/~015d699868887682f5" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} aria-label="UpWork">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.062-1.227l-1.723 5.488a5.534 5.534 0 0 1-5.3 3.847c-2.956 0-5.361-2.406-5.361-5.362S5.524 10.54 8.476 10.54c1.111 0 2.158.349 3.037.954l1.378-4.39A7.058 7.058 0 0 1 18.561 2.94c3.9 0 7.065 3.167 7.065 7.066s-3.165 7.066-7.065 7.066zM8.476 19.34c-1.897 0-3.44-1.543-3.44-3.44s1.543-3.44 3.44-3.44c.485 0 .942.102 1.36.286l-1.353 4.31a3.52 3.52 0 0 1-2.007.284zm10.085-7.79c-2.348 0-4.25-1.9-4.25-4.25S16.213 3.05 18.561 3.05 22.81 4.95 22.81 7.3s-1.896 4.25-4.25 4.25z"></path></svg>
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
