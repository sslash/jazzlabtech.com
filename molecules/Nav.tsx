import React from "react";

interface Props {}

const Nav: React.FC<Props> = ({}) => {
	return (
		<div className="container">
			<div className="flex flex-row-reverse flex-grow">
				<div className="p-3">
					<a href="mailto:michael@jazzlabtech.com">Contact</a>
				</div>
				<div className="p-3">
					<a href="/growth-diaries">Growth Diaries</a>
				</div>
				<div className="p-3">
					<a href="/fire-circuits">Fire Circuits</a>
				</div>
				<div className="p-3">
					<a href="/portfolio">Portfolio</a>
				</div>
				<div className="p-3">
					<a href="/">Home</a>
				</div>
			</div>
		</div>
	);
};

export default Nav;
