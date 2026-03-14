"use client";
import React, { useEffect, useState } from 'react';

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

  const [activeScreenshots, setActiveScreenshots] = useState<string[] | null>(null);
  const [modalSlideIndex, setModalSlideIndex] = useState(0);
  const [musekitsSlide, setMusekitsSlide] = useState(0);

  const musekitsScreenshots = [
    "https://media.licdn.com/dms/image/v2/D4E2DAQGF_MLkmTPoKw/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1733155495693?e=1774058400&v=beta&t=01JoRHJdHKAYDVlh_ewf5f6z2plybEnUMeG19BMCrpM",
    "https://media.licdn.com/dms/image/v2/D4E2DAQEk6N8U5SVjlw/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1733155084594?e=1774058400&v=beta&t=QEqwA2lAGxxO9VNmkiR9U6kq2dETzHoIAlGNSUv6d2Q",
    "https://media.licdn.com/dms/image/v2/D4E2DAQHq4TZmLbLtNg/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1733155842692?e=1774058400&v=beta&t=PmSrWdeTAT-2-x5JecFdNu2Y_8ACJJVST5j9QEckA2E"
  ];

  const vibeSyncScreenshots = [
    "https://musekits.com/placeholder-vibe-1.jpg", // The user did not provide actual Vibe Sync URLs, using placeholder string logic or we can just use external images
    "https://musekits.com/placeholder-vibe-2.jpg"
  ];

  return (
    <main>
      {/* Full-Screen Screenshots Modal */}
      {activeScreenshots && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(30px)', display: 'flex', flexDirection: 'column', animation: 'fadeIn 0.3s ease' }}>
          
          <div style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
             <div style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '500' }}>Project Screenshots</div>
             <button 
               onClick={() => { setActiveScreenshots(null); setModalSlideIndex(0); }} 
               style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', transition: 'background 0.2s' }}
               onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
               onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
             >✕</button>
          </div>
          
          <div style={{ flexGrow: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', overflow: 'hidden' }}>
             
             {/* Left Arrow */}
             <button 
               onClick={() => setModalSlideIndex(prev => (prev === 0 ? activeScreenshots.length - 1 : prev - 1))}
               style={{ position: 'absolute', left: '2rem', zIndex: 10, background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', width: '60px', height: '60px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', backdropFilter: 'blur(10px)', transition: 'all 0.2s' }}
               onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
               onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
             >
               ‹
             </button>

             {/* Centered Active Image */}
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img src={activeScreenshots[modalSlideIndex]} alt={`Screenshot ${modalSlideIndex + 1}`} loading="eager" decoding="async" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', animation: 'fadeIn 0.3s ease' }} />
             
             {/* Hidden Preloader for Next Image (Zero-Throttle Optimization) */}
             {activeScreenshots[modalSlideIndex + 1] && (
               /* eslint-disable-next-line @next/next/no-img-element */
               <img src={activeScreenshots[modalSlideIndex + 1]} alt="preload next" loading="eager" decoding="async" style={{ display: 'none' }} aria-hidden="true" />
             )}

             {/* Right Arrow */}
             <button 
               onClick={() => setModalSlideIndex(prev => (prev === activeScreenshots.length - 1 ? 0 : prev + 1))}
               style={{ position: 'absolute', right: '2rem', zIndex: 10, background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', width: '60px', height: '60px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', backdropFilter: 'blur(10px)', transition: 'all 0.2s' }}
               onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
               onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
             >
               ›
             </button>
          </div>

          {/* Dot Indicators */}
          <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center', gap: '12px' }}>
            {activeScreenshots.map((_, idx) => (
               <button 
                 key={idx} 
                 onClick={() => setModalSlideIndex(idx)}
                 style={{ width: '12px', height: '12px', borderRadius: '50%', border: 'none', padding: 0, background: modalSlideIndex === idx ? '#fff' : 'rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.2s' }}
               />
            ))}
          </div>

        </div>
      )}

      <div className="glow-bg"></div>
      
      {/* Navigation */}
      <nav className="nav-pill">
        {/* Native Logo */}
        <div style={{ fontWeight: '700', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
          DevPortfolio<span style={{ color: 'var(--accent-color)' }}>.</span>
        </div>
        
        {/* Navigation Links */}
        <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem' }}>
        {[
          { name: 'About', href: '#about' },
          { name: 'Experience', href: '#experience' },
          { name: 'Work', href: '#projects' },
          { name: 'Skills', href: '#skills' },
          { name: 'Contact', href: '#contact' }
        ].map((link) => {
          const isActive = `#${activeSection}` === link.href;
          return (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link"
              style={{
                color: isActive ? 'var(--accent-color)' : 'var(--text-secondary)',
                fontWeight: isActive ? '600' : '400',
                opacity: isActive ? 1 : 0.8
              }}
            >
              {link.name}
            </a>
          );
        })}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '6rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        
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

      {/* About Section */}
      <section id="about" className="section" style={{ position: 'relative' }}>
         <div className="fluid-glow fluid-glow-about"></div>
         
         {/* Subtly Scattered Native Shapes */}
         <div className="shape-layer" style={{ position: 'absolute' }}>
           <div className="shape" style={{ top: '15%', right: '5%', opacity: 0.03, fontSize: '3rem' }}>○</div>
           <div className="shape" style={{ bottom: '10%', left: '8%', opacity: 0.03, fontSize: '2rem' }}>✕</div>
         </div>
         
         <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 className="scroll-reveal"><span className="text-gradient">01.</span> About Me</h2>
            <div className="grid-about">
               <div className="scroll-reveal" style={{ paddingRight: '2rem', transitionDelay: '0.1s' }}>
                  <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    Hello! I'm a Full-Stack Web Developer with over 4 years of experience building high-traffic websites and custom web applications.
                  </p>
                  <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                    Previously, I was the sole developer at Musekits, taking ownership of their end-to-end web architecture, payment integrations, and managing over 50k+ monthly visitors. In addition, I hold an AWS Certified Developer (DVA-C02) certification and continually look to expand my knowledge in modern cloud platforms and e-commerce systems.
                  </p>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                     I graduated from St. Lawrence College with a Computer Programming Diploma and am proud to say I earned a Gold Medal in Web Design and Development at the 2025 Skills Ontario Competition.
                  </p>
               </div>
               
               {/* Asymmetric Overlapping Card */}
               <div className="card about-overlay-card scroll-reveal" style={{ position: 'relative', left: '-2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'var(--card-bg)', backdropFilter: 'blur(20px)', zIndex: 2, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)', transitionDelay: '0.2s' }}>
                 <h3 style={{ fontSize: '1.3rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem', color: 'var(--text-primary)' }}>Quick Facts</h3>
                 <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
                   <li><strong style={{ color: 'var(--text-primary)' }}>Education:</strong> St. Lawrence College (Diploma)</li>
                   <li><strong style={{ color: 'var(--text-primary)' }}>Experience:</strong> 4+ Years</li>
                   <li><strong style={{ color: 'var(--text-primary)' }}>Certifications:</strong> AWS DVA-C02</li>
                   <li><strong style={{ color: 'var(--text-primary)' }}>Awards:</strong> Skills Ontario Gold Medalist</li>
                 </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section" style={{ position: 'relative' }}>
         <div className="fluid-glow fluid-glow-exp"></div>
         
         {/* Subtly Scattered Native Shapes */}
         <div className="shape-layer" style={{ position: 'absolute' }}>
           <div className="shape" style={{ top: '40%', left: '85%', opacity: 0.03, fontSize: '2.5rem' }}>△</div>
           <div className="shape" style={{ top: '70%', left: '10%', opacity: 0.03, fontSize: '1.5rem' }}>□</div>
         </div>
         
         <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 className="scroll-reveal"><span className="text-gradient">02.</span> Experience</h2>
            
            {/* Timeline Wrapper */}
            <div style={{ position: 'relative', paddingLeft: '3rem', maxWidth: '850px' }}>
               <div className="timeline-line"></div>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                 
                 <div className="card scroll-reveal" style={{ position: 'relative', transitionDelay: '0.1s' }}>
                   {/* Timeline Node */}
                   <div style={{ position: 'absolute', left: '-3rem', top: '3rem', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-color)', transform: 'translate(-50%, -50%)', border: '3px solid var(--bg-color)', zIndex: 2, boxShadow: '0 0 10px rgba(59,130,246,0.5)' }}></div>
                   
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                     <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', margin: 0 }}>Full Stack Web Developer <span style={{ color: 'var(--accent-color)' }}>@ Muse Kits</span></h3>
                     <span className="badge">Mar 2021 – Dec 2024</span>
                   </div>
                   <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', lineHeight: '1.6' }}>
                     <li>Built and maintained a high-traffic e-commerce website supporting 50,000+ monthly visitors and multi-million-dollar sales.</li>
                     <li>Developed a custom one-page checkout integrated with Shopify, AWS Lambda, DynamoDB, and Chargebee with secure request handling.</li>
                     <li>Directed full website rebranding and redesign in 2022, modernizing UX/UI and improving page load times by ~30%.</li>
                     <li>Led technical architecture and established CI/CD workflows to streamline deployment.</li>
                   </ul>
                 </div>

                 <div className="card scroll-reveal" style={{ position: 'relative', transitionDelay: '0.2s' }}>
                   {/* Timeline Node */}
                   <div style={{ position: 'absolute', left: '-3rem', top: '3rem', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-color)', transform: 'translate(-50%, -50%)', border: '3px solid var(--bg-color)', zIndex: 2, boxShadow: '0 0 10px rgba(59,130,246,0.5)' }}></div>
                   
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                     <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', margin: 0 }}>Web Developer (Freelance) <span style={{ color: 'var(--accent-color)' }}>@ Self Employed</span></h3>
                     <span className="badge">Jan 2021 – May 2022</span>
                   </div>
                   <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', lineHeight: '1.6' }}>
                     <li>Developed custom websites and web applications for clients, managing responsive frontend and backend logic.</li>
                     <li>Optimized website performance, functionality, and SEO ensuring fast load times.</li>
                     <li>Collaborated directly with clients to translate requirements into technical solutions within scope.</li>
                   </ul>
                 </div>

               </div>
            </div>
         </div>
      </section>

      {/* Certifications & Awards */}
      <section id="certifications" className="section" style={{ position: 'relative' }}>
         <div className="glow-bg" style={{ top: '10%', left: '-10%', right: 'auto' }}></div>
         <div className="container">
            <h2 className="animate-fade-in"><span className="text-gradient">03.</span> Awards & Certifications</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
               
               <div className="card animate-fade-in delay-1" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ fontSize: '3rem' }}>🥇</div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>Gold Medalist</h3>
                    <p style={{ margin: '0.5rem 0', fontSize: '0.95rem' }}>Web Design and Development at the 2025 Skills Ontario Competition.</p>
                    <a href="#" className="badge" style={{ marginTop: '0.5rem', display: 'inline-block' }}>Read Article ↗</a>
                  </div>
               </div>

               <div className="card animate-fade-in delay-2" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255, 153, 0, 0.1)', borderRadius: '12px', color: '#ff9900' }}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10z"></path><path d="M12 8v4l3 3"></path></svg>
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>AWS Certified Developer</h3>
                    <p style={{ margin: '0.5rem 0', fontSize: '0.95rem' }}>Obtained AWS DVA-C02 certification, solidifying my knowledge in AWS Cloud offerings.</p>
                  </div>
                  <div>
                    <a href="https://aws.amazon.com/verification" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Verify ↗</a>
                  </div>
               </div>

            </div>
         </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="section" style={{ position: 'relative' }}>
        <div className="fluid-glow fluid-glow-work"></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 className="scroll-reveal"><span className="text-gradient">04.</span> Selected Works</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5rem' }}>
              
              {/* Project 1: Musekits (Asymmetrical Side-by-Side Flex Layout) */}
              <div className="card scroll-reveal" style={{ display: 'flex', flexWrap: 'wrap', padding: '0', overflow: 'hidden', transitionDelay: '0.1s' }}>
                
                {/* Text Content Left */}
                <div style={{ flex: '1 1 400px', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', margin: 0 }}>Muse Kits <span style={{ color: 'var(--text-secondary)', fontWeight: '400', fontSize: '1.2rem' }}>(E-Commerce)</span></h3>
                  </div>
                  <p style={{ marginBottom: '1.5rem', fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    A high-traffic e-commerce platform supporting 50,000+ monthly visitors. I developed the entire end-to-end architecture, including a custom one-page checkout, advanced payment routing, and full website redesign that improved load times by 30%.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
                    <span className="badge">Shopify</span>
                    <span className="badge">AWS Lambda</span>
                    <span className="badge">DynamoDB</span>
                    <span className="badge">Chargebee</span>
                    <span className="badge">Node.js</span>
                    <span className="badge">Google Maps API</span>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    <a href="https://musekits.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.8rem 1.5rem' }}>Visit Site ↗</a>
                    <button onClick={() => setActiveScreenshots(musekitsScreenshots)} className="btn btn-outline" style={{ padding: '0.8rem 1.5rem' }}>View Gallery UI</button>
                  </div>
                </div>
                
                {/* Clickable Hero Image Right */}
                <div 
                  style={{ flex: '1 1 400px', background: 'var(--bg-color)', position: 'relative', display: 'flex', flexDirection: 'column', borderLeft: '1px solid var(--card-border)', cursor: 'pointer', overflow: 'hidden' }}
                  onClick={() => setActiveScreenshots(musekitsScreenshots)}
                  onMouseEnter={(e) => {
                    const overlay = e.currentTarget.querySelector('.hover-overlay') as HTMLElement;
                    if (overlay) overlay.style.opacity = '1';
                    const img = e.currentTarget.querySelector('img') as HTMLElement;
                    if (img) img.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    const overlay = e.currentTarget.querySelector('.hover-overlay') as HTMLElement;
                    if (overlay) overlay.style.opacity = '0';
                    const img = e.currentTarget.querySelector('img') as HTMLElement;
                    if (img) img.style.transform = 'scale(1)';
                  }}
                >
                  {/* Image Container */}
                  <div style={{ flexGrow: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                     <img src={musekitsScreenshots[0]} alt="Musekits Hero" loading="lazy" decoding="async" style={{ height: '100%', width: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} />
                     
                     {/* Hover Overlay Hint */}
                     <div className="hover-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', opacity: 0, transition: 'opacity 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                       <div style={{ background: 'rgba(255,255,255,0.9)', color: '#000', padding: '0.8rem 1.5rem', borderRadius: '99px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
                         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                         View Gallery
                       </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* Project 2: Vibe Sync */}
              <div className="card grid-project scroll-reveal" style={{ transitionDelay: '0.2s' }}>
                {/* Visual Placeholder for iOS App */}
                <div style={{ width: '100%', aspectRatio: '9/19', maxWidth: '280px', margin: '0 auto', background: 'rgba(0,0,0,0.3)', borderRadius: '32px', border: '4px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'var(--text-secondary)' }}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem' }}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                   <span style={{ fontSize: '0.9rem' }}>App Preview</span>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', margin: 0 }}>Vibe Sync (Upcoming iOS App)</h3>
                  </div>
                  <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                    A social networking iOS app allowing users to take photos, draw on an empty canvas or pictures, and add text/stickers. Friends receive push notifications and their home screen widgets update instantly with the newly received image. Releasing next month!
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
                    <span className="badge">SwiftUI</span>
                    <span className="badge">PaperKit</span>
                    <span className="badge">PencilKit</span>
                    <span className="badge">Keychain</span>
                    <span className="badge">AVFoundation (Camera)</span>
                    <span className="badge">Node.js Backend</span>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a href="#" className="btn btn-primary" style={{ opacity: 0.5, cursor: 'not-allowed' }}>App Store (Soon)</a>
                    <button onClick={() => setActiveScreenshots(vibeSyncScreenshots)} className="btn btn-outline" style={{ display: 'none' }}>View UI Previews</button>
                    <span style={{ alignSelf: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem', fontStyle: 'italic' }}>Private Beta</span>
                  </div>
                </div>
              </div>

              {/* Minor Projects Grid */}
              <div className="scroll-reveal" style={{ marginTop: '4rem', transitionDelay: '0.3s' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>Other Notable Projects</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                  
                  {/* Minor Project A */}
                  <a href="#" className="card" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem', textDecoration: 'none' }}>
                    <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'var(--text-secondary)', opacity: 0.5, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.5'}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </div>
                    <div style={{ width: '100%', height: '140px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>📊</div>
                    <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)' }}>DataDash Analytics</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>A real-time dashboard built with React and D3.js handling 1M+ daily data points.</p>
                  </a>

                  {/* Minor Project B */}
                  <a href="#" className="card" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem', textDecoration: 'none' }}>
                    <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'var(--text-secondary)', opacity: 0.5, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.5'}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </div>
                    <div style={{ width: '100%', height: '140px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🤖</div>
                    <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)' }}>Lexi AI</h4>
                    <p style={{ margin: '0', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Internal company Discord bot integrated with OpenAI for automated code reviews.</p>
                  </a>

                  {/* Minor Project C */}
                  <a href="#" className="card" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem', textDecoration: 'none' }}>
                    <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'var(--text-secondary)', opacity: 0.5, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.5'}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </div>
                    <div style={{ width: '100%', height: '140px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>⚡</div>
                    <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)' }}>Turbo Serve</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Ultra-fast Go microservice acting as a reverse proxy for legacy architecture.</p>
                  </a>

                </div>
              </div>

            </div>
         </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section" style={{ position: 'relative' }}>
         {/* Subtly Scattered Native Shapes */}
         <div className="shape-layer" style={{ position: 'absolute' }}>
           <div className="shape" style={{ top: '20%', left: '5%', opacity: 0.03, fontSize: '4rem' }}>◇</div>
           <div className="shape" style={{ bottom: '15%', right: '10%', opacity: 0.03, fontSize: '2rem' }}>○</div>
         </div>
         
         <div className="glow-bg" style={{ top: '50%', left: 'auto', right: '-200px' }}></div>
         <div className="container">
            <h2 className="animate-fade-in"><span className="text-gradient">05.</span> Technical Arsenal</h2>
            
            <div className="card animate-fade-in delay-1" style={{ padding: '3rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                
                {/* Frontend */}
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Frontend Development</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    <span className="badge">HTML5</span>
                    <span className="badge">CSS3/SASS</span>
                    <span className="badge">JavaScript (ES6+)</span>
                    <span className="badge">TypeScript</span>
                    <span className="badge">React</span>
                    <span className="badge">Next.js</span>
                    <span className="badge">Tailwind CSS</span>
                    <span className="badge">Framer Motion</span>
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Backend & Database</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    <span className="badge">Node.js</span>
                    <span className="badge">Express</span>
                    <span className="badge">Python</span>
                    <span className="badge">PostgreSQL</span>
                    <span className="badge">MongoDB</span>
                    <span className="badge">GraphQL</span>
                    <span className="badge">REST APIs</span>
                    <span className="badge">Prisma</span>
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Tools & Cloud</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    <span className="badge">Git / GitHub</span>
                    <span className="badge">Docker</span>
                    <span className="badge">AWS</span>
                    <span className="badge">Vercel</span>
                    <span className="badge">Figma</span>
                    <span className="badge">Jest</span>
                    <span className="badge">CI/CD</span>
                    <span className="badge">Linux</span>
                  </div>
                </div>

              </div>
            </div>
         </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-contact" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
         {/* Localized Floating Shapes for CTA Frame */}
         <div className="shape-layer">
            <div className="shape shape-4" style={{ top: '10%', right: '15%' }}>✖</div>
            <div className="shape shape-5" style={{ bottom: '20%', left: '15%' }}>●</div>
            <div className="shape shape-6" style={{ top: '50%', left: '80%' }}>▲</div>
         </div>
         
         <div className="aurora-bg"></div>
         
         <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            {/* Massive Deep Contrast CTA Card */}
            <div className="scroll-reveal" style={{ maxWidth: '900px', margin: '0 auto', background: 'linear-gradient(145deg, #0f172a 0%, #1e1b4b 100%)', borderRadius: '32px', padding: '5rem 2rem', boxShadow: '0 30px 60px -15px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h2 style={{ marginBottom: '1rem', color: 'rgba(255,255,255,0.8)' }}><span className="text-gradient">04.</span> What's Next?</h2>
              <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '2rem', color: '#fff', letterSpacing: '-0.02em' }}>Get In Touch</h1>
              <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
                I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open. Let's build something beautiful.
              </p>
              <div>
                <a href="mailto:hi@ayyoub.io" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', background: '#fff', color: '#0f172a', padding: '1.2rem 3rem', fontSize: '1.2rem', fontWeight: '600', borderRadius: '99px', textDecoration: 'none', transition: 'all 0.3s', boxShadow: '0 10px 25px -5px rgba(255,255,255,0.3)' }}
                   onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 20px 35px -5px rgba(255,255,255,0.4)'; }}
                   onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(255,255,255,0.3)'; }}
                >
                  Say Hello
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
              </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--card-border)' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Designed & Built with ❤️ by Ayyoub <br/>
          <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Powered by Next.js & React</span>
        </p>
      </footer>
    </main>
  );
}
