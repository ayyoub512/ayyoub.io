import React from 'react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="nav-pill">
      {/* Native Logo */}
      <div style={{ fontWeight: '700', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
        Ayyoub<span style={{ color: 'var(--accent-color)' }}>.</span>
      </div>
      
      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem' }}>
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
    </nav>
  );
}
