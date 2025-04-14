import ContactForm from "@/components/ContactForm";
import { MdEmail } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import PageHeader from "@/components/PageHeader";

// This is the main component for the Contact page
export default function Contact() {
  return (
    <>
      {/* Metadata for the page */}
      <Helmet>
        <title>Contact Me - Andrew Christian Young</title>
        <meta name="description" content="Contact me" />
      </Helmet>

      <PageHeader title="Contact" icon={MdEmail} />

      <ContactForm />
    </>
  );
}
