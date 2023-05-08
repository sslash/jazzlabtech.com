import Page from "../../molecules/Page";
import styles from "../../styles/Home.module.css";

export default function Home() {
	return (
		<Page>
			<div className="mb-20">
				<h1 className={styles.title}>Circuit Smash RPG</h1>

				<div style={{ paddingBottom: "4rem" }}>
					<p className={styles.description}>
						Fitness game with fun and effective circuit workouts.
					</p>
				</div>

				<img
					src="https://i.imgur.com/ocaP037.png"
					alt="Circuit Smash RPG"
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
						href="https://apps.apple.com/us/app/20-minute-fire-circuits/id1637701958"
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
