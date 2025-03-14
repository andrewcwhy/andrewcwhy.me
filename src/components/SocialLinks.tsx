import { socialLinks } from '@/config/social'

interface SocialLinksProps {
    showUsername?: boolean
    showPlatform?: boolean
    showUrl?: boolean
    showIcon?: boolean
    hideHttps?: boolean
}

const SocialLinks = ({
    showPlatform = true,
    showUsername = true,
    showUrl = false,
    showIcon = false,
    hideHttps = false,
}: SocialLinksProps) => {
    return (
        <ul className="space-y-2">
            {Object.values(socialLinks).map(
                ({ platform, username, url, icon: Icon }) => {
                    // Remove the protocol (http/https) if hideHttps is true
                    const displayUrl = hideHttps
                        ? url.replace(/^https?:\/\//, '')
                        : url
                    return (
                        <li
                            key={platform}
                            className="flex items-center space-x-2"
                        >
                            {showIcon && <Icon size={20} />}
                            {showPlatform && (
                                <span className="text-gray-700">
                                    {showUrl ? (
                                        <a
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:underline"
                                            title={`Follow me on ${platform} (${username})`}
                                        >
                                            {platform}
                                        </a>
                                    ) : (
                                        platform
                                    )}
                                </span>
                            )}
                            {showUrl && !showPlatform && (
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    {displayUrl}
                                </a>
                            )}
                        </li>
                    )
                }
            )}
        </ul>
    )
}

export default SocialLinks
