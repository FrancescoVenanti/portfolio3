import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const TypingEffect = ({ words, speed = 150, delay = 1000 }) => {
	const [index, setIndex] = useState(0);
	const [subIndex, setSubIndex] = useState(0);
	const [reverse, setReverse] = useState(false);

	useEffect(() => {
		if (subIndex === words[index].length + 1 && !reverse) {
			setReverse(true);
			setTimeout(() => setSubIndex((prev) => prev - 1), delay);
			return;
		}

		if (subIndex === 0 && reverse) {
			setReverse(false);
			setIndex((prev) => (prev + 1) % words.length);
			return;
		}

		const timeout = setTimeout(
			() => {
				setSubIndex((prev) => prev + (reverse ? -1 : 1));
			},
			reverse ? speed / 2 : speed
		);

		return () => clearTimeout(timeout);
	}, [subIndex, index, reverse, words, speed, delay]);

	return (
		<motion.span
			className=" text__shadow"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			{words[index].substring(0, subIndex)}
			<motion.span animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity, duration: 0.7 }}>
				&#x2588; {/* This is a CSS styled cursor */}
			</motion.span>
		</motion.span>
	);
};

TypingEffect.propTypes = {
	words: PropTypes.array.isRequired,
	speed: PropTypes.number,
	delay: PropTypes.number,
};

export default TypingEffect;
