import Hero from "@/components/Hero";

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
      </main>
    </>
  );
};
