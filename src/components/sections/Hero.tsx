"use client";
import React from "react";

export default function Hero() {
	return (
		<section id="hero" className="section" style={{ minHeight: "80vh", display: "flex", alignItems: "center", paddingTop: "6rem", textAlign: "center", position: "relative", zIndex: 5 }}>
			{/* Animated Geometric Web Background */}
			<div className="hero-geometric-bg">
				<div className="hero-ring hero-ring-1"></div>
				<div className="hero-ring hero-ring-2"></div>
				<div className="hero-ring hero-ring-3"></div>
				<div className="hero-ring hero-ring-4"></div>
			</div>

			{/* Anti-Gravity Shapes */}
			<div className="shape-layer">
				<svg className="shape shape-1" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
					<circle cx="50" cy="50" r="40" />
				</svg>
				<svg className="shape shape-2" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
					<polygon points="50,10 90,90 10,90" />
				</svg>
				<svg className="shape shape-3" viewBox="0 0 100 100" fill="currentColor">
					<circle cx="20" cy="20" r="10" />
					<circle cx="80" cy="20" r="10" />
					<circle cx="50" cy="80" r="10" />
				</svg>
				<svg className="shape shape-4" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8">
					<line x1="20" y1="50" x2="80" y2="50" />
					<line x1="50" y1="20" x2="50" y2="80" />
				</svg>
				<svg className="shape shape-5" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
					<rect x="25" y="25" width="50" height="50" rx="10" />
				</svg>
				<svg className="shape shape-6" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
					<polygon points="50,5 95,50 50,95 5,50" />
				</svg>
			</div>

			<div className="container" style={{ position: "relative", marginTop: "100px", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
				{/* Hero Content */}
				<div style={{ zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
					<div className="badge animate-fade-in" style={{ marginBottom: "2rem" }}>
						✦ Available for new opportunities
					</div>
					<h1 className="animate-fade-in delay-1" style={{ marginBottom: "1.5rem", maxWidth: "900px", fontSize: "clamp(3.5rem, 8vw, 6rem)", lineHeight: "1.1" }}>
						Building digital experiences that <br />
						<div className="word-slider-container">
							<div className="word-slider">
								<span className="text-gradient">inspire.</span>
								<span className="text-gradient">scale.</span>
								<span className="text-gradient">convert.</span>
								<span className="text-gradient">innovate.</span>
								<span className="text-gradient">inspire.</span>
							</div>
						</div>
					</h1>
					<p className="animate-fade-in delay-2" style={{ fontSize: "1.3rem", marginBottom: "3rem", maxWidth: "600px", color: "var(--text-secondary)" }}>
						I&apos;m a Full-Stack Web Developer with 4+ years of experience building websites, custom web applications, and scalable cloud architectures.
					</p>
					<div className="animate-fade-in delay-3" style={{ display: "flex", gap: "1rem", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
						<a href="#projects" className="btn btn-primary">
							View My Work
						</a>
						<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
								<polyline points="14 2 14 8 20 8"></polyline>
								<line x1="16" y1="13" x2="8" y2="13"></line>
								<line x1="16" y1="17" x2="8" y2="17"></line>
								<polyline points="10 9 9 9 8 9"></polyline>
							</svg>
							Resume
						</a>
						<div style={{ display: "flex", gap: "1rem" }}>
							<a href="https://www.linkedin.com/in/ouakkaha" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }} aria-label="LinkedIn">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
									<rect x="2" y="9" width="4" height="12"></rect>
									<circle cx="4" cy="4" r="2"></circle>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
