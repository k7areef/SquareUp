import ContactForm from "@components/Sections/ContactForm";
import ContactInformation from "@components/Sections/ContactInformation";
import CTA from "@components/Sections/CTA";
import Faqs from "@components/Sections/Faqs";
import HeaderInformation from "@components/Sections/HeaderInformation";
import useChangeTitle from "@hooks/useChangeTitle";

function ContactPage() {
    useChangeTitle("Contact")
    return (
        <div className="contact-page">
            <HeaderInformation />
            <ContactInformation />
            <ContactForm />
            <Faqs />
            <CTA />
        </div>
    )
}

export default ContactPage;