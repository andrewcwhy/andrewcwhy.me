import { createFileRoute } from "@tanstack/solid-router";
import { For } from "solid-js";
import { MY } from ":constants/my";

export const Route = createFileRoute("/about")({
	component: AboutPage,
	head: () => ({
		meta: [
			{
				title: `About Me - ${MY.fullName}`,
			},
			{
				name: "description",
				content: "About me.",
			},
			{
				rel: "canonical",
				href: `${MY.url}/about`,
			},
		],
	}),
});

interface Skill {
	name: string;
	level: number;
}

interface Experience {
	title: string;
	company: string;
	period: string;
	description: string;
}

function AboutPage() {
	const skills: Skill[] = [
		{ name: "TypeScript", level: 95 },
		{ name: "React/SolidJS", level: 90 },
		{ name: "Node.js", level: 85 },
		{ name: "UI/UX Design", level: 80 },
		{ name: "System Architecture", level: 88 },
	];

	const experiences: Experience[] = [
		{
			title: "Senior Full Stack Developer",
			company: "Tech Innovations Inc.",
			period: "2022 - Present",
			description:
				"Leading development of scalable web applications and mentoring junior developers.",
		},
		{
			title: "Frontend Engineer",
			company: "Digital Solutions Co.",
			period: "2020 - 2022",
			description:
				"Built responsive user interfaces and improved application performance by 40%.",
		},
		{
			title: "Software Developer",
			company: "StartUp Ventures",
			period: "2018 - 2020",
			description:
				"Developed core features for a SaaS platform serving 10k+ users.",
		},
	];

	return (
		<div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
			{/* Hero Section */}
			<div class="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
				<div class="absolute inset-0 bg-black opacity-10"></div>
				<div class="relative max-w-6xl mx-auto px-6 py-24">
					<div class="flex flex-col md:flex-row items-center gap-12">
						<div class="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-6xl font-bold shadow-2xl">
							ACY
						</div>
						<div class="flex-1 text-center md:text-left">
							<h1 class="text-5xl md:text-6xl font-bold mb-4">
								Andrew Christian Young
							</h1>
							<p class="text-xl md:text-2xl text-blue-100 mb-6">
								Full Stack Developer & Creative Technologist
							</p>
							<p class="text-lg text-blue-50 max-w-2xl">
								Crafting elegant solutions to complex problems with modern web
								technologies. Passionate about building experiences that make a
								difference.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div class="max-w-6xl mx-auto px-6 py-16">
				{/* About Section */}
				<section class="mb-20">
					<h2 class="text-4xl font-bold text-slate-800 mb-8">About Me</h2>
					<div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
						<p class="text-lg text-slate-700 leading-relaxed mb-6">
							Hello! I'm Andrew, a passionate developer with a love for creating
							intuitive and powerful web applications. With over 5 years of
							experience in the industry, I've had the opportunity to work on
							diverse projects ranging from small startups to enterprise-level
							applications.
						</p>
						<p class="text-lg text-slate-700 leading-relaxed mb-6">
							My journey in technology began with a curiosity about how things
							work, which evolved into a career dedicated to building solutions
							that enhance user experiences. I believe in writing clean,
							maintainable code and staying current with the latest industry
							trends and best practices.
						</p>
						<p class="text-lg text-slate-700 leading-relaxed">
							When I'm not coding, you can find me exploring new technologies,
							contributing to open-source projects, or sharing knowledge with
							the developer community through blog posts and mentorship.
						</p>
					</div>
				</section>

				{/* Skills Section */}
				<section class="mb-20">
					<h2 class="text-4xl font-bold text-slate-800 mb-8">
						Skills & Expertise
					</h2>
					<div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
						<div class="space-y-6">
							<For each={skills}>
								{(skill) => (
									<div>
										<div class="flex justify-between mb-2">
											<span class="text-lg font-semibold text-slate-700">
												{skill.name}
											</span>
											<span class="text-lg font-semibold text-blue-600">
												{skill.level}%
											</span>
										</div>
										<div class="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
											<div
												class="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-1000 ease-out"
												style={{ width: `${skill.level}%` }}
											></div>
										</div>
									</div>
								)}
							</For>
						</div>
					</div>
				</section>

				{/* Experience Section */}
				<section class="mb-20">
					<h2 class="text-4xl font-bold text-slate-800 mb-8">Experience</h2>
					<div class="space-y-6">
						<For each={experiences}>
							{(exp, index) => (
								<div class="bg-white rounded-2xl shadow-lg p-8 md:p-10 hover:shadow-xl transition-shadow duration-300">
									<div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
										<div>
											<h3 class="text-2xl font-bold text-slate-800 mb-1">
												{exp.title}
											</h3>
											<p class="text-xl text-blue-600 font-semibold">
												{exp.company}
											</p>
										</div>
										<span class="text-slate-500 font-medium mt-2 md:mt-0">
											{exp.period}
										</span>
									</div>
									<p class="text-lg text-slate-700 leading-relaxed">
										{exp.description}
									</p>
								</div>
							)}
						</For>
					</div>
				</section>

				{/* Contact CTA */}
				<section class="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-2xl p-12 text-center text-white">
					<h2 class="text-4xl font-bold mb-4">Let's Work Together</h2>
					<p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
						I'm always interested in hearing about new projects and
						opportunities. Feel free to reach out if you'd like to connect!
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<button class="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg">
							Get in Touch
						</button>
						<button class="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold text-lg hover:bg-blue-400 transition-colors duration-200 border-2 border-white">
							View Portfolio
						</button>
					</div>
				</section>
			</div>
		</div>
	);
}
