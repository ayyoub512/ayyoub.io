"use client";
import React from 'react';

interface ProjectsProps {
  setActiveScreenshots: (screenshots: string[] | null) => void;
}

export default function Projects({ setActiveScreenshots }: ProjectsProps) {
  
  const musekitsScreenshots = [
    "https://media.licdn.com/dms/image/v2/D4E2DAQGF_MLkmTPoKw/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1733155495693?e=1774058400&v=beta&t=01JoRHJdHKAYDVlh_ewf5f6z2plybEnUMeG19BMCrpM",
    "https://media.licdn.com/dms/image/v2/D4E2DAQEk6N8U5SVjlw/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1733155084594?e=1774058400&v=beta&t=QEqwA2lAGxxO9VNmkiR9U6kq2dETzHoIAlGNSUv6d2Q",
    "https://media.licdn.com/dms/image/v2/D4E2DAQHq4TZmLbLtNg/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1733155842692?e=1774058400&v=beta&t=PmSrWdeTAT-2-x5JecFdNu2Y_8ACJJVST5j9QEckA2E"
  ];

  const vibeSyncScreenshots = [
    "https://musekits.com/placeholder-vibe-1.jpg", 
    "https://musekits.com/placeholder-vibe-2.jpg"
  ];

  return (
    <section id="projects" className="section" style={{ position: 'relative', zIndex: 10 }}>
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
  );
}
