"use client";
import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ position: 'relative', zIndex: 10 }}>
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
  );
}
