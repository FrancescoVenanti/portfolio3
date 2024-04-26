import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import MeComponent from "./Components/MeComponent";
import Technologies from "./Components/Technologies";
import MyWorks from "./Components/MyWorks";
import Contacts from "./Components/Contacts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTools, faBriefcase, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
	const [activeSection, setActiveSection] = useState("me");

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					console.log(
						entry.target.id,
						"is intersecting:",
						entry.isIntersecting,
						"with ratio:",
						entry.intersectionRatio
					);
					if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				root: null, // viewport is the scroll container
				rootMargin: "0px 0px", // Adjusts the effective size of the viewport
				threshold: 0.5, // 50% of the item's visible area must be visible to trigger
			}
		);

		const sections = document.querySelectorAll(".fullpage-section");
		sections.forEach((section) => observer.observe(section));

		return () => sections.forEach((section) => observer.unobserve(section));
	}, []);

	const sections = [
		{ id: "me", icon: faUser, text: "ME", component: <MeComponent /> },
		{ id: "technologies", icon: faTools, text: "TECHNOLOGIES", component: <Technologies /> },
		{ id: "works", icon: faBriefcase, text: "MY WORKS", component: <MyWorks /> },
		{ id: "", icon: faEnvelope, text: "CONTACTS", component: <Contacts /> },
	];

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<div className="row g-0">
			<div className="col-12 col-md-3 col-xl-2 sticky-top">
				<div className="mySidebar d-flex flex-md-column justify-content-around justify-content-md-center align-items-center p-0">
					{sections.map(({ id, icon, text }) => (
						<button
							key={id}
							className={`my-2 btn-outline-accent ${activeSection === id ? "active" : ""}`}
							onClick={() => scrollToSection(id)}
						>
							{isMobile ? <FontAwesomeIcon icon={icon} /> : text}
						</button>
					))}
				</div>
			</div>
			<div className="col-12 col-md-9 col-xl-10">
				<div className={`fullpage-container ${isMobile && "container"}`}>
					{sections.map(({ id, component }) => (
						<motion.div
							key={id}
							id={id}
							className="fullpage-section"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
						>
							{component}
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
