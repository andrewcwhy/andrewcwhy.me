import { FaGithub, FaLinkedin, FaStackOverflow } from "solid-icons/fa";
import { SiRoblox } from "solid-icons/si";
import type { Social } from ":/types/socials.ts";

export const socials: Social[] = [
	{
		platform: "GitHub",
		username: "andrewcwhy",
		url: "https://github.com/andrewcwhy",
		icon: FaGithub,
	},
	{
		platform: "Stack Overflow",
		username: "acy2k5",
		url: "https://stackoverflow.com/users/13189567/acy2k5",
		icon: FaStackOverflow,
	},
	{
		platform: "LinkedIn",
		username: "youngandrewchristian",
		url: "https://www.linkedin.com/in/youngandrewchristian",
		icon: FaLinkedin,
	},
	{
		platform: "Roblox",
		username: "acy2k5",
		url: "https://www.roblox.com/users/145329133/profile",
		icon: SiRoblox,
	},
];
