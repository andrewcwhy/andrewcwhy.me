import SocialLinks from "@/components/SocialLinks";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <section>
      <ContactForm />
      <SocialLinks showName={false} showUrl={true} showIcon={true}/>
    </section>
  );
};

export default Contact;
