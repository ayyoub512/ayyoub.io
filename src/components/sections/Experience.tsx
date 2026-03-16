"use client";
import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ position: 'relative', zIndex: 10 }}>
       <div className="fluid-glow fluid-glow-exp"></div>
       
       {/* Subtly Scattered Native Shapes */}
       <div className="shape-layer" style={{ position: 'absolute' }}>
         <div className="shape" style={{ top: '40%', left: '85%', opacity: 0.03, fontSize: '2.5rem' }}>△</div>
         <div className="shape" style={{ top: '70%', left: '10%', opacity: 0.03, fontSize: '1.5rem' }}>□</div>
       </div>
       
       <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="scroll-reveal"><span className="text-gradient">02.</span> Experience</h2>
          
          {/* Timeline Wrapper */}
          <div className="timeline-wrapper" style={{ position: 'relative', paddingLeft: '3rem', maxWidth: '850px' }}>
             <div className="timeline-line"></div>
             
             <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
               
               <div className="card scroll-reveal" style={{ position: 'relative', transitionDelay: '0.1s' }}>
                 {/* Timeline Node */}
                 <div className="timeline-node" style={{ position: 'absolute', left: '-3rem', top: '3rem', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-color)', transform: 'translate(-50%, -50%)', border: '3px solid var(--bg-color)', zIndex: 2, boxShadow: '0 0 10px rgba(59,130,246,0.5)' }}></div>
                 
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
                 <div className="timeline-node" style={{ position: 'absolute', left: '-3rem', top: '3rem', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-color)', transform: 'translate(-50%, -50%)', border: '3px solid var(--bg-color)', zIndex: 2, boxShadow: '0 0 10px rgba(59,130,246,0.5)' }}></div>
                 
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
  );
}
