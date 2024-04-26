import avatar from "../assets/avatar.jpg";
import TypingEffect from "./TypingEffect";

const MeComponent = () => {
	const words = ["projects.", "skills.", "journey."];

	return (
		<div className=" d-flex justify-content-start justify-content-lg-around align-items-center flex-column flex-lg-row">
			<div className=" d-flex justify-content-center align-items-start m-2 m-lg-5 bg-white">
				<img src={avatar} alt="Francesco Venanti" className=" meImg" />
			</div>
			<div className=" d-flex flex-column justify-content-center text-center text-lg-start">
				<h1 className="display-3 my-2 my-lg-0">Francesco Venanti</h1>
				<p className="display-6 text__accent">Full Stack Developer | Tech Enthusiast | Lifelong Learner</p>
				<p className="fs-5 lead">
					Welcome to my personal portfolio. Here you can find details about my{" "}
					<span className="d-block d-md-inline">
						<TypingEffect words={words} speed={150} delay={2000} />
					</span>
				</p>
			</div>
		</div>
	);
};
export default MeComponent;
