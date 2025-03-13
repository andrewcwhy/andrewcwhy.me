import Hero from "@/components/Hero";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Hero
          title="Hey, I'm Andrew 👋"
          subtitle="A student at UCF"
          buttonText="Contact Me"
          buttonLink="#contact"
        />
        <SocialLinks showName={false} showUrl={true} showIcon={true}/>
      </main>
    </>
  );
};
