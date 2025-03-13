import SocialLinks from "@/components/SocialLinks";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <section>
      <h2>Contact Me</h2>
      <ContactForm />
      <SocialLinks showName={false} showUrl={true} showIcon={true} />
    </section>
  );
};

export default Contact;
