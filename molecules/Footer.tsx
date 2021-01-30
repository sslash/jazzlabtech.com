import styles from "../styles/Home.module.css";

import React from "react";

interface Props {}

const Footer: React.FC<Props> = ({}) => {
	return (
		<footer className={styles.footer}>
			<a href="/" target="_blank" rel="noopener noreferrer">
				<footer className={styles.footer}>
					<p>Made with ✌️ and ❤️</p>
				</footer>
			</a>
		</footer>
	);
};

export default Footer;
