"use client";
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav className="nav-pill">
        {/* Native Logo */}
        <div style={{ fontWeight: '700', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
          Ayyoub<span style={{ color: 'var(--accent-color)' }}>.</span>
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="desktop-nav-links" style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem' }}>
        {links.map((link) => {
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

        {/* Mobile Hamburger Toggle */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-nav-links">
            {links.map((link) => {
              const isActive = `#${activeSection}` === link.href;
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    color: isActive ? 'var(--accent-color)' : 'var(--text-primary)',
                    fontWeight: isActive ? '600' : '500',
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
          
          <div className="mobile-menu-footer">
            <p className="mobile-menu-footer-title">Connect</p>
            <div className="mobile-menu-socials">
              <a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="mobile-social-link" onClick={() => setIsMobileMenuOpen(false)}>
                Resume ↗
              </a>
              <a href="https://www.linkedin.com/in/ouakkaha" target="_blank" rel="noopener noreferrer" className="mobile-social-link" onClick={() => setIsMobileMenuOpen(false)}>
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
