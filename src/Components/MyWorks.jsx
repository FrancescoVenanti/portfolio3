import { useState } from "react";
import { motion } from "framer-motion";
import kiwi from "../assets/kwi.png";
import pizzeria from "../assets/Pizzeria.png";
import clinica from "../assets/Clinica.png";
import spotify from "../assets/Spoty.png";

const MyWorks = () => {
	const [selectedId, setSelectedId] = useState(1);

	const projects = [
		{
			id: 1,
			imageUrl: kiwi,
			name: "Kiwi",
			description:
				"Kiwi is a social network for cooks enthusiast. It allows users to share recipes and cooking tips.",
		},
		{
			id: 2,
			imageUrl: pizzeria,
			name: "Pizzeria",
			description: "Pizzeria is a web app for ordering pizza, and managing a pizzeria.",
		},
		{
			id: 3,
			imageUrl: clinica,
			name: "Clinica veterinaria",
			description: "Clinica veterinaria is a web app for managing a veterinary clinic.",
		},
		{
			id: 4,
			imageUrl: spotify,
			name: "Spotify clone",
			description: "Spotify clone is a web app that mimics the Spotify interface.",
		},
	];

	// Calculate the transform origin dynamically based on which card is selected
	const calculateTransformOrigin = (id, isSelected) => {
		if (!isSelected) return "50% 50%";
		// Calculate percentage based on the card's id or position
		switch (id) {
			case 1:
				return "0% 0%";
			case 2:
				return "100% 0%";
			case 3:
				return "0% 100%";
			case 4:
				return "100% 100%";
			default:
				return "50% 50%";
		}
	};

	return (
		<div className="container p-3">
			<h1 className="text__shadow display-3 text-center">MY WORKS</h1>
			<div className="row g-2 position-relative overflow-hidden">
				{projects.map((project) => (
					<motion.div
						key={project.id}
						layout
						onClick={() => setSelectedId(selectedId === project.id ? null : project.id)}
						initial={{ borderRadius: 10 }}
						animate={{
							zIndex: selectedId === project.id ? 2 : 1,
							scale: selectedId === project.id ? 1.5 : 1,
							transition: { type: "spring", stiffness: 200, damping: 20 },
							transformOrigin: calculateTransformOrigin(project.id, selectedId === project.id),
						}}
						className={`col-6 position-relative d-flex flex-column justify-content-center align-items-center`}
						style={{ cursor: "pointer" }}
					>
						<img src={project.imageUrl} alt={`Project ${project.id}`} className={`img-fluid`} />
						<div className="bg-dark bg-opacity-50 w-100">
							<h3 className="text__shadow text-center">{project.name}</h3>
						</div>
					</motion.div>
				))}
			</div>
			<p className="fs-4 lead ">{selectedId != null && projects[selectedId - 1].description}</p>
		</div>
	);
};

export default MyWorks;
