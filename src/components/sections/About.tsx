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
          
          <div className="about-split-layout" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '5rem',
            marginTop: '3rem',
            alignItems: 'center'
          }}>
            
            {/* Left Column: Visual/Portrait Anchor */}
            <div className="scroll-reveal" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
               {/* Decorative Orbital Rings behind Portrait */}
               <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', aspectRatio: '1', border: '1px dashed rgba(59, 130, 246, 0.2)', borderRadius: '50%', animation: 'spinSlow 40s linear infinite' }}></div>
               <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '90%', aspectRatio: '1', border: '1px solid rgba(139, 92, 246, 0.1)', borderRadius: '50%', animation: 'spinSlowReverse 30s linear infinite' }}></div>
               
               {/* Portrait Container */}
               <div style={{ 
                 position: 'relative', 
                 zIndex: 2,
                 width: '100%', 
                 maxWidth: '400px', 
                 aspectRatio: '4/5', 
                 background: 'linear-gradient(145deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 100%)', 
                 backdropFilter: 'blur(20px)',
                 borderRadius: '32px',
                 border: '1px solid rgba(255,255,255,0.4)',
                 boxShadow: '0 30px 60px -15px rgba(0,0,0,0.1)',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 overflow: 'hidden'
               }}>
                  {/* Avatar Placeholder (Can be replaced with an actual image tag later) */}
                  <div style={{ fontSize: '5rem', opacity: 0.1 }}>👋</div>
                  
                  {/* Floating Tech Badge (Subtle nod to engineering) */}
                  <div className="animate-float" style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'var(--card-bg)', backdropFilter: 'blur(12px)', padding: '1rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)' }}>Open to Work</span>
                  </div>
               </div>
            </div>

            {/* Right Column: Narrative Focus */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              
              <h3 style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
                lineHeight: '1.1', 
                marginBottom: '2rem', 
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em'
              }}>
                Bridging the gap between <span className="text-gradient">design & engineering.</span>
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                <p>
                  I'm a Full Stack Engineer who obsessively focuses on both pixel-perfect frontends and scalable, bulletproof backends. I don't just write code; I look at the holistic product experience to ensure what we build is beautiful, fast, and secure.
                </p>
                <p>
                  I measure my success not by lines of code written, but by the tangible business value and user satisfaction delivered. When I'm not architecting cloud infrastructure or refining CSS micro-interactions, I'm usually exploring new open-source tooling.
                </p>
              </div>
              
              <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <a href="#projects" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}>View Selected Works ↗</a>
                <a href="#experience" style={{ color: 'var(--text-primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                  Read Experience
                </a>
              </div>

            </div>
          </div>
       </div>
    </section>
  );
}
