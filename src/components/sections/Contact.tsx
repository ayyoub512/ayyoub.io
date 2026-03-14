"use client";
import React from 'react';

export default function Contact() {
  return (
    <>
      {/* Constrained Contact Card */}
      <section id="contact" className="section" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
         <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            {/* Standard Header */}
            <h2 className="scroll-reveal"><span className="text-gradient">06.</span> What's Next?</h2>
            
            {/* Contact Card */}
            <div className="card scroll-reveal" style={{ maxWidth: '800px', margin: '0 auto', background: 'linear-gradient(145deg, #0f172a 0%, #1e1b4b 100%)', color: '#fff', padding: '5rem 2rem', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', position: 'relative' }}>
              
              {/* Contained Aurora BG */}
              <div className="aurora-bg" style={{ width: '200%', height: '200%', opacity: 0.6 }}></div>
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4rem)', marginBottom: '1.5rem', color: '#fff', letterSpacing: '-0.02em', fontWeight: '800' }}>Get In Touch</h1>
                <p style={{ margin: '0 auto 3rem auto', fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.7', maxWidth: '600px' }}>
                  I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open. Let's build something beautiful.
                </p>
                <div>
                  <a href="mailto:hi@ayyoub.io" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', background: '#fff', color: '#0f172a', padding: '1.2rem 3rem', fontSize: '1.2rem', fontWeight: '700', borderRadius: '99px', textDecoration: 'none', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', boxShadow: '0 20px 40px -10px rgba(255,255,255,0.3)' }}
                     onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 30px 50px -10px rgba(255,255,255,0.5)'; }}
                     onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(255,255,255,0.3)'; }}
                  >
                    Say Hello
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </a>
                </div>
              </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--card-border)' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Designed & Built with ❤️ by Ayyoub <br/>
          <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Next.js App Router • Vanilla Extract CSS</span>
        </p>
      </footer>
    </>
  );
}
