import { motion } from "framer-motion";

const Technologies = () => {
	const technologies = ["Html", "Css", "Js", "Bootstrap", "React", "Sass", "c#", "Asp.Net", "Sql", "github"];

	// Container variants for staggering children when the whole container is in view
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15, // Stagger the animation of children, each child will start after 0.1s of the previous one
				duration: 0.5,
			},
		},
	};

	// Animation for each card
	const itemVariants = {
		hidden: {
			y: 50,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 260,
				damping: 20,
			},
		},
	};

	return (
		<div className="container px-4 h-100 d-flex flex-column justify-content-center Technologies overflow-hidden mt80">
			<h1 className="mb-0 text__shadow display-4">Technologies</h1>
			<p className="lead text-white-50 mb-5">Try to drag the cards around!</p>
			<motion.div
				className="row"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.8 }}
				dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
				dragElastic={0.5} // Adjust this value to change the elasticity of the bounce back effect
			>
				{technologies.map((tech, index) => (
					<motion.div
						key={index}
						className="col-6 col-md-4 mb-3"
						variants={itemVariants}
						drag // Enables dragging
						whileDrag={{ scale: 1.1 }}
					>
						<div className="card rounded-0 techCard">
							<div className="card-body">
								<h5 className="card-title text-center text__accent m-0">{tech}</h5>
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default Technologies;
