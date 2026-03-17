"use client";
import React from "react";

export default function About() {
	return (
		<section id="about" className="section" style={{ position: "relative", zIndex: 10 }}>
			<div className="fluid-glow fluid-glow-about"></div>

			{/* Subtly Scattered Native Shapes */}
			<div className="shape-layer" style={{ position: "absolute" }}>
				<div className="shape" style={{ top: "15%", right: "5%", opacity: 0.03, fontSize: "3rem" }}>
					○
				</div>
				<div className="shape" style={{ bottom: "10%", left: "8%", opacity: 0.03, fontSize: "2rem" }}>
					✕
				</div>
			</div>

			<div className="container" style={{ position: "relative", zIndex: 1 }}>
				<h2 className="scroll-reveal">
					<span className="text-gradient">01.</span> About Me
				</h2>

				<div
					className="about-split-layout"
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
						gap: "5rem",
						marginTop: "3rem",
						alignItems: "center"
					}}>
					{/* Right Column: Narrative Focus */}
					<div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
						<h3
							style={{
								fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
								lineHeight: "1.1",
								marginBottom: "2rem",
								color: "var(--text-primary)",
								letterSpacing: "-0.02em"
							}}>
							I&apos;m a Full-Stack Developer
							{/* <span className="text-gradient">design & engineering.</span> */}
						</h3>

						<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.8" }}>
							<p>
								Hi, I&apos;m Ayyoub. I&apos;m a Full-Stack Web Developer who builds websites and robust web applications with a focus on performance, usability, and scalable
								architecture.
							</p>
							<p>
								I care about delivering solutions that not only work but also create meaningful user experiences. When I&apos;m not coding, I explore new open-source tools and
								experiment with modern web technologies.
							</p>
						</div>

						<div style={{ marginTop: "3rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
							<a href="resume.pdf" target="_blank" className="btn btn-primary" style={{ padding: "0.6rem 1.2rem", whiteSpace: "nowrap" }}>
								View Resume ↗
							</a>
							<a href="https://www.linkedin.com/in/ouakkaha/" target="_blank" className="badge" style={{ display: "inline-block", textAlign: "center", whiteSpace: "nowrap" }}>
								LinkedIn ↗
							</a>
							<a href="https://github.com/ayyoub512" target="_blank" className="badge" style={{ display: "inline-block", textAlign: "center", whiteSpace: "nowrap" }}>
								Github ↗
							</a>
						</div>
					</div>

					{/* Left Column: Visual/Portrait Anchor */}
					<div className="scroll-reveal" style={{ position: "relative", display: "flex", justifyContent: "center" }}>
						{/* Decorative Orbital Rings behind Portrait */}
						<div
							style={{
								position: "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
								width: "120%",
								aspectRatio: "1",
								border: "1px dashed rgba(59, 130, 246, 0.2)",
								borderRadius: "50%",
								animation: "spinSlow 40s linear infinite"
							}}></div>
						<div
							style={{
								position: "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
								width: "90%",
								aspectRatio: "1",
								border: "1px solid rgba(139, 92, 246, 0.1)",
								borderRadius: "50%",
								animation: "spinSlowReverse 30s linear infinite"
							}}></div>

						{/* Portrait Container */}
						<div
							style={{
								position: "relative",
								zIndex: 2,
								width: "100%",
								maxWidth: "400px",
								aspectRatio: "4/5",
								background: "linear-gradient(145deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 100%)",
								backdropFilter: "blur(20px)",
								borderRadius: "32px",
								border: "1px solid rgba(255,255,255,0.4)",
								// boxShadow: "0 30px 60px -15px rgba(0,0,0,0.1)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								overflow: "hidden"
							}}>
							{/* Avatar Placeholder (Can be replaced with an actual image tag later) */}
							<img
								src="headshot.jpg"
								alt="Portrait"
								loading="lazy"
								decoding="async"
								style={{ height: "100%", width: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
