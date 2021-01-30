import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Nav from "../../molecules/Nav";
import Page from "../../molecules/Page";
import PortfolioRow from "../../molecules/PortfolioRow";

export default function Home() {
	return (
		<Page>
			<div className="mb-32">
				<h1 className={styles.title}>Portfolio</h1>

				<p className={styles.description}>
					Current and past Jazzlab projects
				</p>
			</div>

			<PortfolioRow
				imgSrc="https://www.ice.no/globalassets/bilder/andre-bilder/app-bilder/ice-appen.png?preset=1920w"
				imgAlt="ice-appen"
				title="ice-appen"
				link="https://www.ice.no/produkt/ice-app/"
				body="Bruk appen til å få full oversikt og kontroll over eget
        mobilbruk. Med ice-appen kan du følge med på forbruk og
        kostnader, kjøpe ekstra datapakker, rulle over data til
        familie eller venner samt aktivere diverse sperrer."
			/>

			<div className="m-12"></div>
			<PortfolioRow
				imgSrc="https://www.finimize.com/wp/wp-content/uploads/2019/06/app-phone-shot-vert-1.jpg"
				imgAlt="Finimize app"
				title="Finimize"
				body="Your guide to personal finance. Learn to plan, save and, invest with Finimize for iPhone."
				link="https://www.finimize.com/wp/app/"
			/>
		</Page>
	);
}
