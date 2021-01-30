import Page from "../../molecules/Page";
import styles from "../../styles/Home.module.css";

const items = [
	{
		title: "Competing against luck",
		type: "Book",
		link:
			"https://www.goodreads.com/book/show/28820024-competing-against-luck",
	},
	{
		title: "Swift by Sundell",
		type: "Podcast",
		link: "https://www.swiftbysundell.com/podcast/",
	},
	{
		title: "Endel",
		type: "App",
		link: "https://endel.io/",
	},
	{
		title: "How to Work with Designers",
		type: "Article",
		link:
			"https://medium.com/the-year-of-the-looking-glass/how-to-work-with-designers-6c975dede146",
	},
	{
		title: "Fleet Foxes - Shore",
		type: "Album",
		link: "https://open.spotify.com/album/0lmjCPEcec2k6L7ysNIcd3",
	},
	{
		title: "Shoe dog",
		type: "Book",
		link: "https://www.goodreads.com/book/show/27220736-shoe-dog",
	},
	{
		title: "Poolside FM",
		type: "App",
		link: "https://poolside.fm/",
	},
	{
		title: "The making of a manager",
		type: "Book",
		link:
			"https://www.goodreads.com/book/show/38821039-the-making-of-a-manager",
	},
];

export default function Home() {
	return (
		<Page>
			<div className="mb-20">
				<h1 className={styles.title}>Top 10</h1>

				<p className={styles.description}>
					10 gems you may or may not know of
				</p>
			</div>

			<div className="font-mono">
				{items.map((item, i) => (
					<TopItem key={i} {...item} num={i + 1} />
				))}

				<p>More to come ...</p>
			</div>
		</Page>
	);
}

const TopItem = ({ type, title, num, link }) => (
	<div className="mb-8">
		<h2 className="mb-2">
			#{num} {title}
		</h2>
		<div className="flex flex-row text-xs items-center">
			<Label>{type}</Label>
			<a href={link} className="text-blue-500 ml-2">
				Check out
			</a>
		</div>
	</div>
);

const Label = ({ children }) => (
	<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
		{children}
	</span>
);
