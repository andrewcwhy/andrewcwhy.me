import Button from "@/components/Button";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg mt-2 text-gray-400">{subtitle}</p>
      {buttonText && buttonLink && (
        <a href={buttonLink} className="mt-6">
          <Button text={buttonText} />
        </a>
      )}
    </section>
  );
};

export default Hero;
