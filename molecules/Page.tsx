import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import Footer from "./Footer";
import Nav from "./Nav";

interface Props {}

const Page: React.FC<Props> = ({ children }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Jazzlab</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav />

			<main className={styles.main}>{children}</main>

			<Footer />
		</div>
	);
};

export default Page;
