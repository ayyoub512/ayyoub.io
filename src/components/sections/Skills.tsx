"use client";
import React from "react";

export default function Skills() {
	return (
		<section id="skills" className="section" style={{ position: "relative", zIndex: 10 }}>
			{/* Subtly Scattered Native Shapes */}
			<div className="shape-layer" style={{ position: "absolute" }}>
				<div className="shape" style={{ top: "20%", left: "5%", opacity: 0.03, fontSize: "4rem" }}>
					◇
				</div>
				<div className="shape" style={{ bottom: "15%", right: "10%", opacity: 0.03, fontSize: "2rem" }}>
					○
				</div>
			</div>

			<div className="glow-bg" style={{ top: "50%", left: "auto", right: "-200px" }}></div>
			<div className="container">
				<h2 className="animate-fade-in">
					<span className="text-gradient">05.</span> Technical Arsenal
				</h2>

				<div className="card animate-fade-in delay-1" style={{ padding: "3rem" }}>
					<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "3rem" }}>
						<div>
							<h3 style={{ fontSize: "1.2rem", marginBottom: "1.5rem", color: "var(--accent-color)" }}>Core Development</h3>
							<div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
								<span className="badge">Node.js</span>
								<span className="badge">Python</span>
								<span className="badge">PHP</span>
								<span className="badge">JavaScript</span>
								<span className="badge">Express</span>
								<span className="badge">REST APIs</span>
								<span className="badge">GraphQL</span>
								<span className="badge">Swift</span>
								<span className="badge">PostgreSQL</span>
								<span className="badge">MongoDB</span>
							</div>
						</div>

						<div>
							<h3 style={{ fontSize: "1.2rem", marginBottom: "1.5rem", color: "var(--accent-color)" }}>Cloud & DevOps</h3>
							<div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
								<span className="badge">AWS</span>
								<span className="badge">CI/CD</span>
								<span className="badge">Docker</span>
								<span className="badge">Linux</span>
								<span className="badge">Serverless / Lambda</span>
								<span className="badge">Vercel</span>
								<span className="badge">Git</span>
							</div>
						</div>

						<div>
							<h3 style={{ fontSize: "1.2rem", marginBottom: "1.5rem", color: "var(--accent-color)" }}>Modern Practices & Tools</h3>
							<div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
								<span className="badge">Testing / Jest / Cypress</span>
								<span className="badge">Web Performance Optimization</span>
								<span className="badge">Accessibility (a11y)</span>
								<span className="badge">SWR</span>
								<span className="badge">API Integration / Microservices</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
