import Page from "../../molecules/Page";
import styles from "../../styles/Home.module.css";

export default function Home() {
	return (
		<Page>
			<div className="mb-20">
				<h1 className={styles.title}>The Growth Diaries</h1>

				<div style={{ paddingBottom: "4rem" }}>
					<p className={styles.description}>
						The workout tracker you'll fall inn love with
					</p>
				</div>

				<img
					src="https://i.imgur.com/PwnbUWS.png"
					alt="The Growth Diaries"
					style={{
						width: "100%",
						maxWidth: 750,
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
						href="https://apps.apple.com/app/the-growth-diaries/id1661453949"
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
