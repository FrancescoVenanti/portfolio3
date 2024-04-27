import { useState } from "react";
import kiwi from "../assets/kwi.png";
import pizzeria from "../assets/Pizzeria.png";
import clinica from "../assets/Clinica.png";
import spotify from "../assets/Spoty.png";

import { motion } from "framer-motion";

const MyWorks = () => {
	const [selectedId, setSelectedId] = useState(1);

	const projects = [
		{
			id: 1,
			imageUrl: kiwi,
			name: "Kiwi",
			description:
				"Kiwi is a social network for cooking enthusiast, with all the functionalities of a social network",
		},
		{
			id: 2,
			imageUrl: pizzeria,
			name: "Pizzeria",
			description:
				"Pizzeria is a web app where users can order pizza and the pizza owner can manage products, orders and users.",
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
			description: "Spotify clone mimics the Spotify interface and functionalities",
		},
	];

	return (
		<div className="container">
			<h2 className="display-5 text-center text__accent mb-lg-3">My Works</h2>
			<div className="main-project">
				{selectedId && (
					<div className="project-card">
						<img
							src={projects.find((p) => p.id === selectedId).imageUrl}
							alt={projects.find((p) => p.id === selectedId).name}
							className="project-image m-auto"
						/>
						<div className="text-center">
							<h3 className="display-6 text__shadow my-lg-3">
								{projects.find((p) => p.id === selectedId).name}
							</h3>
							<p>{projects.find((p) => p.id === selectedId).description}</p>
						</div>
					</div>
				)}
			</div>
			<div className="small-projects">
				{projects.map((project) => (
					<motion.div
						key={project.id}
						className="project-card"
						onClick={() => setSelectedId(project.id)}
						initial={{ opacity: 0.5 }}
						animate={{ opacity: selectedId === project.id ? 0 : 0.5 }}
						layout
					>
						<img src={project.imageUrl} alt={project.name} className="project-image" />
						<h3>{project.name}</h3>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default MyWorks;
