import React from 'react';

export default function Home() {
  return (
    <main>
      <div className="glow-bg"></div>
      
      {/* Navigation */}
      <nav className="nav-pill">
        <div style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
          Ayyoub.io
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem' }}>
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Work</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '6rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="fluid-glow fluid-glow-hero"></div>
        
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
              <span className="text-gradient kinetic-text" style={{ paddingRight: '1rem' }}></span>
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
                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                 </a>
                 <a href="https://upwork.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} aria-label="UpWork">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.062-1.227l-1.723 5.488a5.534 5.534 0 0 1-5.3 3.847c-2.956 0-5.361-2.406-5.361-5.362S5.524 10.54 8.476 10.54c1.111 0 2.158.349 3.037.954l1.378-4.39A7.058 7.058 0 0 1 18.561 2.94c3.9 0 7.065 3.167 7.065 7.066s-3.165 7.066-7.065 7.066zM8.476 19.34c-1.897 0-3.44-1.543-3.44-3.44s1.543-3.44 3.44-3.44c.485 0 .942.102 1.36.286l-1.353 4.31a3.52 3.52 0 0 1-2.007.284zm10.085-7.79c-2.348 0-4.25-1.9-4.25-4.25S16.213 3.05 18.561 3.05 22.81 4.95 22.81 7.3s-1.896 4.25-4.25 4.25z"></path></svg>
                 </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
         <div className="fluid-glow fluid-glow-about"></div>
         
         <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 className="animate-fade-in"><span className="text-gradient">01.</span> About Me</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
               <div className="animate-fade-in delay-1" style={{ paddingRight: '2rem' }}>
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
               <div className="card animate-fade-in delay-2" style={{ position: 'relative', left: '-2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'var(--card-bg)', backdropFilter: 'blur(20px)', zIndex: 2, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}>
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
      <section id="experience" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
         <div className="fluid-glow fluid-glow-exp"></div>
         <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 className="animate-fade-in"><span className="text-gradient">02.</span> Experience</h2>
            
            {/* Timeline Wrapper */}
            <div style={{ position: 'relative', paddingLeft: '3rem', maxWidth: '850px' }}>
               <div className="timeline-line"></div>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                 
                 <div className="card animate-fade-in delay-1" style={{ position: 'relative' }}>
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

                 <div className="card animate-fade-in delay-2" style={{ position: 'relative' }}>
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
                  <div style={{ fontSize: '3rem' }}>☁️</div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>AWS Certified Developer</h3>
                    <p style={{ margin: '0.5rem 0', fontSize: '0.95rem' }}>Obtained AWS DVA-C02 certification, solidifying my knowledge in AWS Cloud offerings.</p>
                    <span className="badge" style={{ marginTop: '0.5rem', display: 'inline-block' }}>DVA-C02</span>
                  </div>
               </div>

            </div>
         </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="fluid-glow fluid-glow-work"></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 className="animate-fade-in"><span className="text-gradient">04.</span> Selected Works</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5rem' }}>
              
              {/* Project 1: Musekits */}
              <div className="card animate-fade-in delay-1" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '0', overflow: 'hidden' }}>
                <div style={{ padding: '2.5rem 2.5rem 0 2.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', margin: 0 }}>Muse Kits <span style={{ color: 'var(--text-secondary)', fontWeight: '400', fontSize: '1.2rem' }}>(E-Commerce)</span></h3>
                  </div>
                  <p style={{ marginBottom: '1.5rem', fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    A high-traffic e-commerce platform supporting 50,000+ monthly visitors. I developed the entire end-to-end architecture, including a custom one-page checkout, advanced payment routing, and full website redesign that improved load times by 30%.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1rem' }}>
                    <span className="badge">Shopify</span>
                    <span className="badge">AWS Lambda</span>
                    <span className="badge">DynamoDB</span>
                    <span className="badge">Chargebee</span>
                    <span className="badge">Node.js</span>
                    <span className="badge">Google Maps API</span>
                  </div>
                </div>
                
                {/* Horizontal CSS Slider for Musekits Screenshots + Mac Window Frame */}
                <div style={{ background: 'var(--bg-color)', borderTop: '1px solid var(--card-border)' }}>
                  <div className="mac-dots">
                    <div className="mac-dot"></div><div className="mac-dot"></div><div className="mac-dot"></div>
                  </div>
                  <div className="slider-container" style={{ padding: '1rem', margin: 0 }}>
                     {[
                       "https://media.licdn.com/dms/image/v2/D4E2DAQGF_MLkmTPoKw/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1733155495693?e=1774058400&v=beta&t=01JoRHJdHKAYDVlh_ewf5f6z2plybEnUMeG19BMCrpM",
                       "https://media.licdn.com/dms/image/v2/D4E2DAQEk6N8U5SVjlw/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1733155084594?e=1774058400&v=beta&t=QEqwA2lAGxxO9VNmkiR9U6kq2dETzHoIAlGNSUv6d2Q",
                       "https://media.licdn.com/dms/image/v2/D4E2DAQHq4TZmLbLtNg/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1733155842692?e=1774058400&v=beta&t=PmSrWdeTAT-2-x5JecFdNu2Y_8ACJJVST5j9QEckA2E"
                     ].map((imgUrl, i) => (
                       <div key={i} className="slider-item" style={{ aspectRatio: '16/9', borderRadius: '4px' }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={imgUrl} alt={`Musekits Screenshot ${i + 1}`} />
                       </div>
                     ))}
                  </div>
                </div>
              </div>

              {/* Project 2: Vibe Sync */}
              <div className="card animate-fade-in delay-2" style={{ display: 'grid', gridTemplateColumns: '350px minmax(0, 1fr)', gap: '3rem', alignItems: 'center' }}>
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
                </div>
              </div>

            </div>
         </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section" style={{ position: 'relative' }}>
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
      <section id="contact" className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
         <div className="container">
            <h2 className="animate-fade-in" style={{ marginBottom: '1rem' }}><span className="text-gradient">04.</span> What's Next?</h2>
            <h1 className="animate-fade-in delay-1" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '2rem' }}>Get In Touch</h1>
            <p className="animate-fade-in delay-2" style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.2rem' }}>
              I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="animate-fade-in delay-3">
              <a href="mailto:hello@example.com" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>Say Hello</a>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--card-border)' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Designed & Built by Alex <br/>
          <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Powered by Next.js & React</span>
        </p>
      </footer>
    </main>
  );
}
