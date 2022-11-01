import Page from "../../molecules/Page";
import styles from "../../styles/Home.module.css";

export default function Home() {
	return (
		<Page>
			<div className="mb-20">
				<h1 className={styles.title}>Fire Circuits</h1>

				<div style={{ paddingBottom: "4rem" }}>
					<p className={styles.description}>
						Quick and brutal circuit workouts.
					</p>
				</div>

				<img
					src="https://i.imgur.com/ocaP037.png"
					alt="Fire Circuits"
					style={{
						width: "100%",
						maxWidth: 700,
						paddingBottom: "6rem",
						paddingLeft: "1rem",
						paddingRight: "1rem",
					}}
				/>

				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<a
						href="/"
						style={{
							display: "block",
							backgroundImage: `url(
								"https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
							)`,
							backgroundSize: "contain",
							width: 240,
							height: 80,
						}}
					></a>
				</div>
			</div>
		</Page>
	);
}
