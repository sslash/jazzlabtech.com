import "@fortawesome/fontawesome-free/css/all.min.css";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import { AppProps } from "next/app";

function JazzlabApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default JazzlabApp;
