"use client";
import React from "react";

interface ProjectsProps {
	setActiveScreenshots: (screenshots: string[] | null) => void;
}

export default function Projects({ setActiveScreenshots }: ProjectsProps) {
	const musekitsScreenshots = [
		"muse/home-page.png",
		"muse/subscription.png",
		"muse/checkout.png",
		"muse/collabs-page.png",
		"muse/product-details-shopify-metafields.png",
		"muse/products-page.png",
		"muse/collab-snack.png",
		"muse/collabs-creatures-of-darkness.png",
		"muse/rewards.png"
	];

	const vibeSyncScreenshots = ["vibe-sync-app.png", "https://musekits.com/placeholder-vibe-2.jpg"];

	return (
		<section id="projects" className="section" style={{ position: "relative", zIndex: 10 }}>
			<div className="fluid-glow fluid-glow-work"></div>
			<div className="container" style={{ position: "relative", zIndex: 1 }}>
				<h2 className="scroll-reveal">
					<span className="text-gradient">04.</span> Selected Works
				</h2>

				<div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "5rem" }}>
					{/* Project 1: Musekits (Asymmetrical Side-by-Side Flex Layout) */}
					<div className="card scroll-reveal" style={{ display: "flex", flexWrap: "wrap", padding: "0", overflow: "hidden", transitionDelay: "0.1s" }}>
						{/* Text Content Left */}
						<div style={{ flex: "1 1 400px", padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
							<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
								<h3 style={{ fontSize: "1.8rem", color: "var(--text-primary)", margin: 0 }}>
									Muse Kits <span style={{ color: "var(--text-secondary)", fontWeight: "400", fontSize: "1.2rem" }}>(E-Commerce)</span>
								</h3>
							</div>
							<p style={{ marginBottom: "1.5rem", fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
								A high-traffic e-commerce platform supporting 50,000+ monthly visitors. I developed the entire end-to-end architecture, including a custom one-page checkout, advanced
								payment routing, and full website redesign that improved load times by 30%.
							</p>
							<div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
								<span className="badge">Shopify</span>
								<span className="badge">AWS Lambda</span>
								<span className="badge">DynamoDB</span>
								<span className="badge">Chargebee</span>
								<span className="badge">Node.js</span>
								<span className="badge">Google Maps API</span>
							</div>

							<div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
								<a href="https://musekits.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: "0.8rem 1.5rem" }}>
									Visit Site ↗
								</a>
								<button onClick={() => setActiveScreenshots(musekitsScreenshots)} className="btn btn-outline" style={{ padding: "0.8rem 1.5rem" }}>
									View Screenshots
								</button>
							</div>
						</div>

						{/* Clickable Hero Image Right */}
						<div
							style={{
								flex: "1 1 350px",
								background: "var(--bg-color)",
								position: "relative",
								display: "flex",
								flexDirection: "column",
								borderLeft: "1px solid var(--card-border)",
								cursor: "pointer",
								overflow: "hidden"
							}}
							onClick={() => setActiveScreenshots(musekitsScreenshots)}
							onMouseEnter={(e) => {
								const overlay = e.currentTarget.querySelector(".hover-overlay") as HTMLElement;
								if (overlay) overlay.style.opacity = "1";
								const img = e.currentTarget.querySelector("img") as HTMLElement;
								if (img) img.style.transform = "scale(1.02)";
							}}
							onMouseLeave={(e) => {
								const overlay = e.currentTarget.querySelector(".hover-overlay") as HTMLElement;
								if (overlay) overlay.style.opacity = "0";
								const img = e.currentTarget.querySelector("img") as HTMLElement;
								if (img) img.style.transform = "scale(1)";
							}}>
							{/* Image Container */}
							<div style={{ position: "relative" }}>
								<div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
									{/* eslint-disable-next-line @next/next/no-img-element */}

									<div style={{ position: "relative", maxHeight: "500px" }}>
										<img
											src={musekitsScreenshots[0]}
											alt="Musekits Hero"
											loading="lazy"
											decoding="async"
											style={{ height: "100%", width: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
										/>
									</div>
									{/* Hover Overlay Hint */}
									<div
										className="hover-overlay"
										style={{
											position: "absolute",
											inset: 0,
											background: "rgba(0,0,0,0.4)",
											backdropFilter: "blur(4px)",
											opacity: 0,
											transition: "opacity 0.3s ease",
											display: "flex",
											alignItems: "center",
											justifyContent: "center"
										}}>
										<div
											style={{
												background: "rgba(255,255,255,0.9)",
												color: "#000",
												padding: "0.8rem 1.5rem",
												borderRadius: "99px",
												fontWeight: "600",
												display: "flex",
												alignItems: "center",
												gap: "0.5rem",
												boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
											}}>
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
												<path d="M15 3h6v6"></path>
												<path d="M10 14L21 3"></path>
												<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
											</svg>
											View Screenshots
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Project 2: Vibe Sync */}
					<div className="card grid-project scroll-reveal" style={{ transitionDelay: "0.2s" }}>
						<img
							src="vibe-sync-app.png"
							alt="Vibe Sync App"
							loading="lazy"
							decoding="async"
							style={{ height: "auto", width: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
						/>

						<div>
							<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
								<h3 style={{ fontSize: "1.8rem", color: "var(--text-primary)", margin: 0 }}>Vibe Sync (Upcoming iOS App)</h3>
							</div>
							<p style={{ marginBottom: "1.5rem", fontSize: "1.1rem" }}>
								A social networking iOS app allowing users to take photos, draw on an empty canvas or pictures, and add text/stickers. Friends receive push notifications and their home
								screen widgets update instantly with the newly received image. Releasing next month!
							</p>
							<div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
								<span className="badge">SwiftUI</span>
								<span className="badge">PaperKit</span>
								<span className="badge">PencilKit</span>
								<span className="badge">Keychain</span>
								<span className="badge">AVFoundation (Camera)</span>
								<span className="badge">Node.js Backend</span>
							</div>

							<div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
								<a href="#" className="btn btn-primary" style={{ opacity: 0.5, cursor: "not-allowed" }}>
									App Store (Soon)
								</a>
								<button onClick={() => setActiveScreenshots(vibeSyncScreenshots)} className="btn btn-outline" style={{ display: "none" }}>
									View Screenshots
								</button>
								<span style={{ alignSelf: "center", color: "var(--text-secondary)", fontSize: "0.9rem", fontStyle: "italic" }}>Private Beta</span>
							</div>
						</div>
					</div>

					{/* Minor Projects Grid */}
					<div className="scroll-reveal" style={{ marginTop: "4rem", transitionDelay: "0.3s" }}>
						<h3 style={{ fontSize: "1.5rem", marginBottom: "2rem", textAlign: "center", color: "var(--text-secondary)" }}>Other Notable Projects</h3>
						<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
							{/* Valor Provision */}
							<div
								href="https://github.com/ayyoub512/valor-provisions"
								className="card"
								style={{ position: "relative", display: "flex", flexDirection: "column", gap: "1rem", padding: "1.5rem", textDecoration: "none" }}>
								<img
									src="valor.jpg"
									alt="Valor Provisions logo"
									loading="lazy"
									decoding="async"
									style={{ borderRadius: "8px", height: "auto", width: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
								/>

								<h4 style={{ margin: 0, fontSize: "1.1rem", color: "var(--text-primary)" }}>Valor Provisions</h4>
								<p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
									A responsive Next.js website using Sanity headless CMS for dynamic content, with fast data fetching via SWR.
								</p>

								<div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "0rem" }}>
									<span className="badge">Next.js</span>
									<span className="badge">Sanity CMS</span>
									<span className="badge">SWR</span>
									<span className="badge">TypeScript</span>
								</div>

								<a href="https://github.com/ayyoub512/valor-provisions" className="badge" style={{ marginTop: "0.5rem", display: "inline-block", textAlign: "center" }}>
									View on Github ↗
								</a>
							</div>

							<div
								href="https://plateitmeals.com/"
								className="card"
								style={{ position: "relative", display: "flex", flexDirection: "column", gap: "1rem", padding: "1.5rem", textDecoration: "none" }}>
								<img
									src="plateit.jpg"
									alt="Plate It Meals logo"
									loading="lazy"
									decoding="async"
									style={{ borderRadius: "8px", height: "auto", width: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
								/>

								<h4 style={{ margin: 0, fontSize: "1.1rem", color: "var(--text-primary)" }}>Plat It Meals</h4>
								<p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
									Provided consultation on website functionality and user experience enhancements.
								</p>

								<div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "0rem" }}>
									<span className="badge">Shopify customization</span>
									<span className="badge">JavaScript</span>
									<span className="badge">technical consultation</span>
									<span className="badge">Web navigation</span>
								</div>

								<a href="https://plateitmeals.com/" className="badge" style={{ marginTop: "0.5rem", display: "inline-block", textAlign: "center" }}>
									Visit Website ↗
								</a>
							</div>

							{/* Minor Project C */}
							<div href="#" className="card" style={{ position: "relative", display: "flex", flexDirection: "column", gap: "1rem", padding: "1.5rem", textDecoration: "none" }}>
								<img
									src="upwork.jpg"
									alt="UpWork logo"
									loading="lazy"
									decoding="async"
									style={{ borderRadius: "8px", height: "auto", width: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
								/>
								<h4 style={{ margin: 0, fontSize: "1.1rem", color: "var(--text-primary)" }}>Other Projects</h4>
								<p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
									I’ve worked on additional client projects that are under NDA or not publicly shareable. You can view my Upwork profile for a full list of past work, client ratings,
									and feedback.
								</p>

								<a href="https://www.upwork.com/freelancers/~015d699868887682f5" className="badge" style={{ marginTop: "0.5rem", display: "inline-block", textAlign: "center" }}>
									UpWork Profile ↗
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
