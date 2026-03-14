"use client";
import React from 'react';

interface ProjectModalProps {
  activeScreenshots: string[] | null;
  setActiveScreenshots: (screenshots: string[] | null) => void;
  modalSlideIndex: number;
  setModalSlideIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function ProjectModal({ 
  activeScreenshots, 
  setActiveScreenshots, 
  modalSlideIndex, 
  setModalSlideIndex 
}: ProjectModalProps) {
  
  if (!activeScreenshots) return null;

  return (
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
           onClick={() => setModalSlideIndex((prev: number) => (prev === 0 ? activeScreenshots.length - 1 : prev - 1))}
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
           onClick={() => setModalSlideIndex((prev: number) => (prev === activeScreenshots.length - 1 ? 0 : prev + 1))}
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
  );
}
