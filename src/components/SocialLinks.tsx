import { socialLinks } from "@/config/social";

interface SocialLinksProps {
  showName?: boolean;
  showUrl?: boolean;
  showIcon?: boolean;
  hideHttps?: boolean;
}

const SocialLinks = ({
  showName = true,
  showUrl = false,
  showIcon = false,
  hideHttps = false,
}: SocialLinksProps) => {
  return (
    <ul className="space-y-2">
      {Object.values(socialLinks).map(({ name, url, icon: Icon }) => {
        // Remove the protocol (http/https) if hideHttps is true
        const displayUrl = hideHttps ? url.replace(/^https?:\/\//, "") : url;
        return (
          <li key={name} className="flex items-center space-x-2">
            {showIcon && <Icon size={20} />}
            {showName && (
              <span className="text-gray-700">
                {showUrl ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {name}
                  </a>
                ) : (
                  name
                )}
              </span>
            )}
            {showUrl && !showName && (
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
        );
      })}
    </ul>
  );
};

export default SocialLinks;
