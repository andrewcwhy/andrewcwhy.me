import { type Component, mergeProps } from "solid-js";
import { socialLinks } from ":config/social";

interface SocialLinksProps {
	showPlatform?: boolean;
	showUrl?: boolean;
	showIcon?: boolean;
	hideHttps?: boolean;
}

export const SocialLinks: Component<SocialLinksProps> = (props) => {
	const props = mergeProps(
		{ hideHttps: false, showIcon: false, showPlatform: true, showUrl: false },
		props,
	);

	return (
		<ul class="space-y-2">
			{Object.values(socialLinks).map(
				({ platform, username, url, icon: Icon }) => {
					// Remove the protocol (http/https) if hideHttps is true
					const displayUrl = hideHttps ? url.replace(/^https?:\/\//, "") : url;
					return (
						<li key={platform} class="flex items-center space-x-2">
							{props.showIcon && <Icon size={20} />}
							{props.showPlatform && (
								<span class="text-gray-700">
									{showUrl ? (
										<a
											href={url}
											target="_blank"
											rel="noopener noreferrer"
											class="text-blue-400 hover:underline"
											title={`Follow me on ${platform} (${username})`}
										>
											{platform}
										</a>
									) : (
										platform
									)}
								</span>
							)}
							{props.showUrl && !showPlatform && (
								<a
									href={url}
									target="_blank"
									rel="noopener noreferrer"
									class="text-blue-500 hover:underline"
								>
									{displayUrl}
								</a>
							)}
						</li>
					);
				},
			)}
		</ul>
	);
};
