import Page from "../../molecules/Page";
import PortfolioRow from "../../molecules/PortfolioRow";
import styles from "../../styles/Home.module.css";

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
				imgSrc="https://oda.com/static/front/img/ios/app-in-hand.bb01f2ef3fc9.webp"
				imgAlt="Oda"
				title="Oda"
				body="Oda er Norges største matbutikk på nett, og du finner oss i både App Store og på Google Play"
				link="https://oda.com/no/about/app/"
			/>

			<div className="m-12"></div>
			<PortfolioRow
				imgSrc="https://www.finimize.com/wp/wp-content/uploads/2019/06/app-phone-shot-vert-1.jpg"
				imgAlt="Finimize app"
				title="Finimize"
				body="Your guide to personal finance. Learn to plan, save and, invest with Finimize for iPhone."
				link="https://www.finimize.com/wp/app/"
			/>
			<div className="m-12"></div>
			<PortfolioRow
				imgSrc="https://uploads-ssl.webflow.com/5c83c0639eacd15b6c6462ba/5ed4abd1c6c97891f6e63242_phone-highlight.png"
				imgAlt="Shiftfm"
				title="Shift"
				link="https://www.shiftfm.app/"
				body="Podcasts & Music, mixed perfectly into your workouts. The #1 Podcast App for Fitness"
			/>

			<div className="m-12"></div>
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
				imgSrc="https://static.schibsted.com/wp-content/uploads/2018/07/27072620/routes-toppbilde-600x300.jpg"
				imgAlt="Routes.guide"
				title="Routes"
				body="Routes is a platform that shows perfectly planned days made by locals. These are called routes. Every route is filled with pictures, ratings, navigation, transit directions and a (soon to be) offline map, that we aggregate from third party services. In this way you can save hours of planning and use fewer applications when you plan your trip."
				link="https://www.producthunt.com/posts/routes-guide"
			/>
		</Page>
	);
}
