import React from "react";

interface Props {
	imgSrc: string;
	imgAlt: string;
	title: string;
	body: string;
	link: string;
	rounded: boolean;
}

const PortfolioRow: React.FC<Props> = ({
	imgSrc,
	imgAlt,
	title,
	body,
	link,
	rounded = true,
}) => {
	return (
		<div className="container max-w-5xl">
			<div className="grid grid-cols-2">
				<div className="flex flex-wrap justify-center">
					<div className="w-6/12 sm:w-6/12 px-3">
						<div
							style={{
								backgroundImage: `url(${imgSrc})`,
								backgroundSize: "cover",
								width: 160,
								height: 160,
								borderRadius: 80,
							}}
							className="shadow-lg h-auto align-middle border-none"
						/>
					</div>
				</div>

				<div>
					<h4 className="font-bold text-xl mb-1">{title}</h4>
					<div className="max-w-sm text-sm mb-1">{body}</div>
					<a href={link} className="text-blue-400">
						Check out
					</a>
				</div>
			</div>
		</div>
	);
};

export default PortfolioRow;
