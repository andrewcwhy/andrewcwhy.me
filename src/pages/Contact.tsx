import SocialLinks from "@/components/SocialLinks";

const Contact = () => {
  return (
    <section>
      <h2>Contact Me</h2>
      <SocialLinks showName={false} showUrl={true} showIcon={true} />
    </section>
  );
};

export default Contact;
