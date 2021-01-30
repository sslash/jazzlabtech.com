import Page from "../../molecules/Page";
import PortfolioRow from "../../molecules/PortfolioRow";
import styles from "../../styles/Home.module.css";

export default function Home() {
	return (
		<Page>
			<div className="mb-32">
				<h1 className={styles.title}>Jazzlab Apps</h1>

				<p className={styles.description}>
					Current and past Jazzlab apps
				</p>
			</div>

			<PortfolioRow
				imgSrc="https://uploads-ssl.webflow.com/5c83c0639eacd15b6c6462ba/5ed4abd1c6c97891f6e63242_phone-highlight.png"
				imgAlt="Shiftfm"
				title="Shift"
				rounded={false}
				link="https://www.shiftfm.app/"
				body="Podcasts & Music, mixed perfectly into your workouts. The #1 Podcast App for Fitness"
			/>

			<div className="m-12"></div>
			<PortfolioRow
				imgSrc="https://static.schibsted.com/wp-content/uploads/2018/07/27072620/routes-toppbilde-600x300.jpg"
				imgAlt="Routes.guide"
				title="Routes"
				rounded={false}
				body="Routes is a platform that shows perfectly planned days made by locals. These are called routes. Every route is filled with pictures, ratings, navigation, transit directions and a (soon to be) offline map, that we aggregate from third party services. In this way you can save hours of planning and use fewer applications when you plan your trip."
				link="https://www.producthunt.com/posts/routes-guide"
			/>
		</Page>
	);
}