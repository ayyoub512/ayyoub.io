"use client";
import React from 'react';

export default function Certifications() {
  return (
    <section id="certifications" className="section" style={{ position: 'relative', zIndex: 10 }}>
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
  );
}
