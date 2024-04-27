import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cv from "../assets/CvEnglish.pdf";

const Contacts = () => {
	return (
		<div className=" mt-5 mt80 ">
			<div className="container d-flex flex-column align-items-center mt-3 ">
				<h1 className="text__shadow display-3">CONTACTS</h1>
				<div className=" d-flex align-items-center fs-4">
					<FontAwesomeIcon icon={faEnvelope} size="2x" className="text__accent me-3" />{" "}
					<a href="mailto:francesco.venanti@gmail.com" className="text-decoration-none text-white">
						<span className="d-none d-md-inline">francesco.venanti@gmail.com</span>
						<span className="d-inline d-md-none">E-Mail</span>
					</a>
				</div>
				<div className="mt-3 d-flex align-items-center fs-4">
					<FontAwesomeIcon icon={faLinkedin} size="2x" className="text__accent me-3" />{" "}
					<a
						href="https://www.linkedin.com/in/francesco-venanti-dev/"
						className="text-decoration-none text-white"
						target="_blank"
					>
						<span className="d-none d-md-inline">linkedin.com/in/francesco-venanti-dev</span>
						<span className="d-inline d-md-none">Linkedin</span>
					</a>
				</div>
				<div className="mt-3 d-flex align-items-center fs-4">
					<FontAwesomeIcon icon={faGithub} size="2x" className="text__accent me-3" />{" "}
					<a
						href="https://github.com/FrancescoVenanti"
						className="text-decoration-none text-white"
						target="_blank"
					>
						<span className="d-none d-md-inline">github.com/FrancescoVenanti</span>
						<span className="d-inline d-md-none">GitHub</span>
					</a>
				</div>
				<div className="mt-3 d-flex align-items-center fs-4">
					<FontAwesomeIcon icon={faFilePdf} size="2x" className="text__accent me-3" />{" "}
					<a
						href={cv}
						download="VenantiResume.pdf"
						className="text-decoration-none text-white"
						target="_blank"
					>
						<span>Resume</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
