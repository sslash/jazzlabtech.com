import Layout from "../../molecules/LandingLayout";

const IndexPage = () => (
	<Layout title="Home | Next.js + TypeScript Example">
		<Hero />
		<Services />
		<Featured />
		{/* <Team /> */}
		<PriceTable />
		<Finisher />
		<Contact />
	</Layout>
);

export default IndexPage;

/// Page Sections
const Hero = () => (
	<div
		className="relative pt-16 pb-32 flex content-center items-center justify-center"
		style={{
			minHeight: "75vh",
		}}
	>
		<div
			className="absolute top-0 w-full h-full bg-center bg-cover"
			style={{
				backgroundImage:
					"url('https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80')",
			}}
		>
			<span
				id="blackOverlay"
				className="w-full h-full absolute opacity-50 bg-black"
			></span>
		</div>
		<div className="container relative mx-auto">
			<div className="items-center flex flex-wrap">
				<div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
					<div className="pr-12">
						<h1 className="text-white font-semibold text-5xl">
							Your users, on a{" "}
							<span className="font-extrabold text-green-400">
								podcast
							</span>{" "}
							about your product.
						</h1>
						<p className="mt-4 text-lg text-gray-300">
							<span className="text-green-400 font-extrabold">
								Empathy
							</span>{" "}
							delivered to your product team each month, in an
							amazing podcast.{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
		<div
			className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
			style={{ height: "70px", transform: "translateZ(0)" }}
		>
			<svg
				className="absolute bottom-0 overflow-hidden"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				version="1.1"
				viewBox="0 0 2560 100"
				x="0"
				y="0"
			>
				<polygon
					className="text-gray-300 fill-current"
					points="2560 0 2560 100 0 100"
				></polygon>
			</svg>
		</div>
	</div>
);

const Services = () => (
	<section className="pb-20 bg-gray-300 -mt-24">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap">
				<div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
					<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
						<div className="px-4 py-5 flex-auto">
							<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
								<i className="fas fa-award"></i>
							</div>
							<h6 className="text-xl font-semibold">
								User research without the effort
							</h6>
							<p className="mt-2 mb-4 text-gray-600">
								Our user research team will manage your users,
								and create podcasts in our studio. Get the
								finished product in your team's inbox every
								month.
							</p>
						</div>
					</div>
				</div>

				<div className="w-full md:w-4/12 px-4 text-center">
					<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
						<div className="px-4 py-5 flex-auto">
							<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
								<i className="fas fa-retweet"></i>
							</div>
							<h6 className="text-xl font-semibold">
								Motivate your team
							</h6>
							<p className="mt-2 mb-4 text-gray-600">
								Hearing people talk about your product is highly
								motivating! Stay engaged by getting honest
								product discussions each month.
							</p>
						</div>
					</div>
				</div>

				<div className="pt-6 w-full md:w-4/12 px-4 text-center">
					<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
						<div className="px-4 py-5 flex-auto">
							<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
								<i className="fas fa-fingerprint"></i>
							</div>
							<h6 className="text-xl font-semibold">
								Unique insight
							</h6>
							<p className="mt-2 mb-4 text-gray-600">
								Learn things you would never have discovered
								through traditional user interviews. Our
								researchers are experts in finding golden
								insights!
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-wrap items-center mt-32">
				<div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
					<div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
						<i className="fas fa-user-friends text-xl"></i>
					</div>
					<h3 className="text-3xl mb-2 font-semibold leading-normal">
						Empathy building that actually works
					</h3>
					<p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
						Let's be honest, most team members don't have the time
						to read through long interview transcripts. Podcasts the
						secret weapon to bring knowledge to your team!
					</p>
					<a
						href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
						className="font-bold text-gray-800 mt-8"
					>
						Get started now!
					</a>
				</div>

				<div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
					<div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-600">
						<img
							alt="..."
							src="https://images.unsplash.com/photo-1583127812417-7c06e950a432?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cG9kY2FzdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
							className="align-middle rounded-t-lg"
						/>
						<blockquote className="relative p-8 mb-4">
							<svg
								preserveAspectRatio="none"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 583 95"
								className="absolute left-0 w-full block"
								style={{
									height: "95px",
									top: "-94px",
								}}
							>
								<polygon
									points="-30,95 583,95 583,65"
									className="text-pink-600 fill-current"
								></polygon>
							</svg>
							<h4 className="text-xl font-bold text-white">
								Top Notch Podcasts
							</h4>
							<p className="text-md font-light mt-2 text-white">
								Our podcasts are carefully curated to be both
								educational and fun! We tailor the questions for
								each individual product team, and sprinkle on
								our own secret sauce of fun.
							</p>
						</blockquote>
					</div>
				</div>
			</div>
		</div>
	</section>
);

const Featured = () => (
	<section className="relative py-20">
		<div
			className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
			style={{ height: "80px", transform: "translateZ(0)" }}
		>
			<svg
				className="absolute bottom-0 overflow-hidden"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				version="1.1"
				viewBox="0 0 2560 100"
				x="0"
				y="0"
			>
				<polygon
					className="text-white fill-current"
					points="2560 0 2560 100 0 100"
				></polygon>
			</svg>
		</div>

		<div className="container mx-auto px-4">
			<div className="items-center flex flex-wrap">
				<div className="w-full md:w-4/12 ml-auto mr-auto px-4">
					<img
						alt="..."
						className="max-w-full rounded-lg shadow-lg"
						src="https://images.unsplash.com/photo-1543269865-4430f94492b9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29udmVyc2F0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
					/>
				</div>
				<div className="w-full md:w-5/12 ml-auto mr-auto px-4">
					<div className="md:pr-12">
						<div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
							<i className="fas fa-rocket text-xl"></i>
						</div>
						<h3 className="text-3xl font-semibold">
							Enlightning conversations
						</h3>
						<p className="mt-4 text-lg leading-relaxed text-gray-600">
							There's something really intruiging about hearing
							people talk about the things you build. It's
							humbling, and highly educational, and you realize
							how much you want to improve your product
						</p>
						<ul className="list-none mt-6">
							<li className="py-2">
								<div className="flex items-center">
									<div>
										<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
											<i className="fas fa-fingerprint"></i>
										</span>
									</div>
									<div>
										<h4 className="text-gray-600">
											New insights each month
										</h4>
									</div>
								</div>
							</li>
							<li className="py-2">
								<div className="flex items-center">
									<div>
										<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
											<i className="fab fa-html5"></i>
										</span>
									</div>
									<div>
										<h4 className="text-gray-600">
											Highly motivational
										</h4>
									</div>
								</div>
							</li>
							<li className="py-2">
								<div className="flex items-center">
									<div>
										<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
											<i className="far fa-paper-plane"></i>
										</span>
									</div>
									<div>
										<h4 className="text-gray-600">
											Fun and entertaining content
										</h4>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
);

const Team = () => (
	<section className="pt-20 pb-48">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-center text-center mb-24">
				<div className="w-full lg:w-6/12 px-4">
					<h2 className="text-4xl font-semibold">
						Here are our heroes
					</h2>
					<p className="text-lg leading-relaxed m-4 text-gray-600">
						According to the National Oceanic and Atmospheric
						Administration, Ted, Scambos, NSIDClead scentist, puts
						the potentially record maximum.
					</p>
				</div>
			</div>
			<div className="flex flex-wrap">
				<div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
					<div className="px-6">
						<img
							alt="..."
							src={
								"https://images.unsplash.com/photo-1583127812417-7c06e950a432?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9kY2FzdHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
							}
							className="shadow-lg rounded-full max-w-full mx-auto"
							style={{ maxWidth: "120px" }}
						/>
						<div className="pt-6 text-center">
							<h5 className="text-xl font-bold">Ryan Tompson</h5>
							<p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
								Web Developer
							</p>
							<div className="mt-6">
								<button
									className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
									type="button"
								>
									<i className="fab fa-twitter"></i>
								</button>
								<button
									className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
									type="button"
								>
									<i className="fab fa-facebook-f"></i>
								</button>
								<button
									className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
									type="button"
								>
									<i className="fab fa-dribbble"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
					<div className="px-6">
						<img
							alt="..."
							src={
								"https://images.unsplash.com/photo-1485579149621-3123dd979885?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHBvZGNhc3RzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
							}
							className="shadow-lg rounded-full max-w-full mx-auto"
							style={{ maxWidth: "120px" }}
						/>
						<div className="pt-6 text-center">
							<h5 className="text-xl font-bold">Romina Hadid</h5>
							<p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
								Marketing Specialist
							</p>
							<div className="mt-6">
								<button
									className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
									type="button"
								>
									<i className="fab fa-google"></i>
								</button>
								<button
									className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
									type="button"
								>
									<i className="fab fa-facebook-f"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
					<div className="px-6">
						<img
							alt="..."
							src={
								"https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHBvZGNhc3RzfGVufDB8fDB8&auto=format&fit=crop&w=800&q=60"
							}
							className="shadow-lg rounded-full max-w-full mx-auto"
							style={{ maxWidth: "120px" }}
						/>
						<div className="pt-6 text-center">
							<h5 className="text-xl font-bold">Alexa Smith</h5>
							<p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
								UI/UX Designer
							</p>
							<div className="mt-6">
								<button
									className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
									type="button"
								>
									<i className="fab fa-google"></i>
								</button>
								<button
									className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
									type="button"
								>
									<i className="fab fa-twitter"></i>
								</button>
								<button
									className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
									type="button"
								>
									<i className="fab fa-instagram"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
					<div className="px-6">
						<img
							alt="..."
							src={
								"https://images.unsplash.com/photo-1593697972496-8f31cba830f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHBvZGNhc3RzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
							}
							className="shadow-lg rounded-full max-w-full mx-auto"
							style={{ maxWidth: "120px" }}
						/>
						<div className="pt-6 text-center">
							<h5 className="text-xl font-bold">Jenna Kardi</h5>
							<p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
								Founder and CEO
							</p>
							<div className="mt-6">
								<button
									className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
									type="button"
								>
									<i className="fab fa-dribbble"></i>
								</button>
								<button
									className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
									type="button"
								>
									<i className="fab fa-google"></i>
								</button>
								<button
									className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
									type="button"
								>
									<i className="fab fa-twitter"></i>
								</button>
								<button
									className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
									type="button"
								>
									<i className="fab fa-instagram"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

const Finisher = () => (
	<section className="pb-20 relative block bg-gray-900">
		<div
			className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
			style={{ height: "80px", transform: "translateZ(0)" }}
		>
			<svg
				className="absolute bottom-0 overflow-hidden"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				version="1.1"
				viewBox="0 0 2560 100"
				x="0"
				y="0"
			>
				<polygon
					className="text-gray-900 fill-current"
					points="2560 0 2560 100 0 100"
				></polygon>
			</svg>
		</div>

		<div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
			<div className="flex flex-wrap text-center justify-center">
				<div className="w-full lg:w-6/12 px-4">
					<h2 className="text-4xl font-semibold text-white">
						A powerful tool for your product team
					</h2>
					<p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500"></p>
				</div>
			</div>
			<div className="flex flex-wrap mt-12 justify-center">
				<div className="w-full lg:w-3/12 px-4 text-center">
					<div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
						<i className="fas fa-medal text-xl"></i>
					</div>
					<h6 className="text-xl mt-5 font-semibold text-white">
						Excelent Services
					</h6>
					<p className="mt-2 mb-4 text-gray-500">
						We'll work very closely together with your team, to
						ensure the product is of superb quality.
					</p>
				</div>
				<div className="w-full lg:w-3/12 px-4 text-center">
					<div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
						<i className="fas fa-poll text-xl"></i>
					</div>
					<h5 className="text-xl mt-5 font-semibold text-white">
						Grow your market
					</h5>
					<p className="mt-2 mb-4 text-gray-500">
						Empathy Casts is the unfair advantage you'll have over
						your customers. Grow faster by understanding your users
					</p>
				</div>
				<div className="w-full lg:w-3/12 px-4 text-center">
					<div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
						<i className="fas fa-lightbulb text-xl"></i>
					</div>
					<h5 className="text-xl mt-5 font-semibold text-white">
						Focus on what matters
					</h5>
					<p className="mt-2 mb-4 text-gray-500">
						Learn what your customers are saying about your product.
						Use the insight to shape your product
					</p>
				</div>
			</div>
		</div>
	</section>
);

const Contact = () => (
	<section className="relative block py-24 lg:pt-0 bg-gray-900">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
				<div className="w-full lg:w-6/12 px-4">
					<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
						<div className="flex-auto p-5 lg:p-10">
							<h4 className="text-2xl font-semibold">
								Want to earn cash by talking about your favorite
								product?
							</h4>
							<p className="leading-relaxed mt-1 mb-4 text-gray-600">
								Complete this form and we will get back to you
								in 24 hours.
							</p>
							<div className="relative w-full mb-3 mt-8">
								<label
									className="block uppercase text-gray-700 text-xs font-bold mb-2"
									htmlFor="full-name"
								>
									Full Name
								</label>
								<input
									type="text"
									className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
									placeholder="Full Name"
									style={{ transition: "all .15s ease" }}
								/>
							</div>

							<div className="relative w-full mb-3">
								<label
									className="block uppercase text-gray-700 text-xs font-bold mb-2"
									htmlFor="email"
								>
									Email
								</label>
								<input
									type="email"
									className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
									placeholder="Email"
									style={{ transition: "all .15s ease" }}
								/>
							</div>

							<div className="relative w-full mb-3">
								<label
									className="block uppercase text-gray-700 text-xs font-bold mb-2"
									htmlFor="message"
								>
									Message
								</label>
								<textarea
									rows={4}
									cols={80}
									className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
									placeholder="Type a message..."
								/>
							</div>
							<div className="text-center mt-6">
								<button
									className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
									type="button"
									style={{ transition: "all .15s ease" }}
								>
									Send Message
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

const PriceTable = () => (
	<div className="w-full bg-blue pt-8">
		<div className="flex flex-col sm:flex-row justify-center mb-6 sm:mb-0">
			<div className="sm:flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg rounded-tr-none bg-white mt-4 flex flex-col">
				<div className="p-8 text-3xl font-bold text-center">Single</div>
				<div className="border-0 border-grey-light border-t border-solid text-sm">
					<div className="text-center border-0 border-grey-light border-b border-solid py-4">
						1 podcast episode
					</div>
					<div className="text-center border-0 border-grey-light border-b border-solid py-4">
						Episode summary
					</div>
					<div className="text-center border-0 border-grey-light border-b border-solid py-4">
						5 listener accounts
					</div>
				</div>
				<div className="text-center px-8 pt-8 text-xl mt-auto">
					$99.99
				</div>
				<div className="text-center mt-8 mb-8 mt-auto">
					<a
						href="#"
						className="inline-block bg-green-400 text-white px-6 py-4 rounded hover:bg-green-darker hover:text-white hover:no-underline"
					>
						Sign Up
					</a>
				</div>
			</div>
			<div className="flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg bg-white mt-4 sm:-mt-4 shadow-lg z-30 flex flex-col">
				<div className="w-full p-8 text-3xl font-bold text-center">
					Monthly
				</div>
				<div className="w-full border-0 border-grey-light border-t border-solid text-sm">
					<div className="text-center border-0 border-grey-light border-b border-solid py-4">
						2 podcasts / month
					</div>
					<div className="text-center border-0 border-grey-light border-b border-solid py-4">
						Up to 5 research candidates per podcast
					</div>
					<div className="text-center border-0 border-grey-light border-b border-solid py-4">
						Unlimited listener accounts
					</div>
					<div className="text-center border-0 border-grey-light border-b border-solid py-4">
						Follow-up questions
					</div>
					<div className="text-center border-0 border-grey-light border-b border-solid py-4">
						Summary transcripts
					</div>
				</div>
				<div className="w-full text-center px-8 pt-8 text-xl mt-auto">
					$1000
				</div>
				<div className="w-full text-center mb-8 mt-auto">
					<a
						href="#"
						className="inline-block bg-green-400 px-6 py-4 text-white rounded hover:bg-green-darker hover:text-white hover:no-underline"
					>
						Sign Up
					</a>
				</div>
			</div>
			<div className="flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg rounded-tl-none bg-white mt-4 flex flex-col">
				<div className="p-8 text-3xl font-bold text-center">
					Enterprise
				</div>
				<div className="border-0 border-grey-light border-t border-solid text-sm">
					<div className="text-center border-0 border-grey-light border-b border-solid py-4">
						All from monthly
					</div>
					<div className="text-center border-0 border-grey-light border-b border-solid py-4">
						Up to 10 podcasts / month (one for each product team)
					</div>
					<div className="text-center border-0 border-grey-light border-b border-solid py-4">
						Up to 5 research candidates per podcast
					</div>
					<div className="text-center border-0 border-grey-light border-b border-solid py-4">
						Unlimited accounts
					</div>
					<div className="text-center border-0 border-grey-light border-b border-solid py-4">
						User diary research ⭐️
					</div>
				</div>
				<div className="text-center pt-8 mb-20 mt-auto">
					<a
						href="#"
						className="inline-block bg-green-400 text-white px-6 py-4 rounded hover:bg-green-darker hover:text-white hover:no-underline"
					>
						Talk to us!
					</a>
				</div>
			</div>
		</div>
	</div>
);
