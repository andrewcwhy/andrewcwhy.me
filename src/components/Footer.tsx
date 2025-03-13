import { socialLinks } from "@/config/socialLinks";

const Footer = () => {
  return (
    <footer className="p-4 text-center">
      <p>Connect with me:</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={socialLinks.stackoverflow} target="_blank" rel="noopener noreferrer">StackOverflow</a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
