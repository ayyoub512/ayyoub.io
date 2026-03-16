"use client";
import React from "react";

export default function Contact() {
	return (
		<>
			{/* Constrained Contact Card */}
			<section id="contact" className="section" style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
				<div className="container" style={{ position: "relative", zIndex: 1 }}>
					{/* Standard Header */}
					<h2 className="scroll-reveal">
						<span className="text-gradient">06.</span> What's Next?
					</h2>

					{/* Contact Card */}
					<div
						className="card scroll-reveal"
						style={{
							// maxWidth: "900px",
							margin: "0 auto",
							background: "linear-gradient(145deg, #0f172a 0%, #1e1b4b 100%)",
							color: "#fff",
							padding: "5rem 2rem",
							borderRadius: "32px",
							border: "1px solid rgba(255,255,255,0.1)",
							overflow: "hidden",
							position: "relative"
						}}>
						{/* Contained Aurora BG */}
						<div className="aurora-bg" style={{ width: "200%", height: "200%", opacity: 0.6 }}></div>

						<div style={{ position: "relative", zIndex: 2 }}>
							<h1 style={{ fontSize: "clamp(3rem, 6vw, 4rem)", marginBottom: "1.5rem", color: "#fff", letterSpacing: "-0.02em", fontWeight: "800" }}>Get In Touch</h1>
							<p style={{ margin: "0 auto 3rem auto", fontSize: "1.2rem", color: "rgba(255,255,255,0.8)", lineHeight: "1.7", maxWidth: "600px" }}>
								I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open. Let's build something
								beautiful.
							</p>

							{/* Links Grid for Rush Scrollers */}
							<div className="contact-links-grid">
								<a href="mailto:hi@ayyoub.io" className="contact-link">
                                    <span style={{ fontSize: "1.8rem" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24" viewBox="0 -960 960 960" fill="#fff">
                                            <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm85-315q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Z"/>
                                        </svg>
                                    </span>
									<span style={{ fontWeight: "600", fontSize: "1rem", color: "#fff" }}>Email Me</span>
								</a>

								<a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <span style={{ fontSize: "1.8rem" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
                                            <path d="M360-460h40v-80h40q17 0 28.5-11.5T480-580v-40q0-17-11.5-28.5T440-660h-80v200Zm40-120v-40h40v40h-40Zm120 120h80q17 0 28.5-11.5T640-500v-120q0-17-11.5-28.5T600-660h-80v200Zm40-40v-120h40v120h-40Zm120 40h40v-80h40v-40h-40v-40h40v-40h-80v200ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/>
                                        </svg>
                                    </span>
									<span style={{ fontWeight: "600", fontSize: "1rem", color: "#fff" }}>Resume</span>
								</a>

								<a href="https://www.linkedin.com/in/ouakkaha" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <span style={{ fontSize: "1.8rem" }}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            // fill="none"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                            <rect x="2" y="9" width="4" height="12"></rect>
                                            <circle cx="4" cy="4" r="2"></circle>
                                        </svg>
                                    </span>
									<span style={{ fontWeight: "600", fontSize: "1rem", color: "#fff" }}>LinkedIn</span>
								</a>
								<a href="https://github.com/ayyoub512" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <span style={{ fontSize: "1.8rem" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 256 250"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
                                            <g>
                                                <path fill="#ffffff" d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z" ></path>
                                            </g>
                                        </svg>
                                    </span>
									<span style={{ fontWeight: "600", fontSize: "1rem", color: "#fff" }}>GitHub</span>
								</a>
								<a href="https://www.upwork.com/freelancers/~015d699868887682f5" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <span style={{ fontSize: "1.8rem" }}>
                                        <svg fill="#fff" width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z"/>
</svg>
                                    </span>
									<span style={{ fontWeight: "600", fontSize: "1rem", color: "#fff" }}>Upwork</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer style={{ padding: "2rem 0", textAlign: "center", borderTop: "1px solid var(--card-border)" }}>
				<p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
					Designed & Built with ❤️ by Ayyoub.<br />
					{/* <span style={{ fontSize: "0.8rem", opacity: 0.7 }}>Next.js App Router • Vanilla Extract CSS</span> */}
				</p>
			</footer>
		</>
	);
}
