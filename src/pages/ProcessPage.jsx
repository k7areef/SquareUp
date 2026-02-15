import ContactForm from "@components/Sections/ContactForm";
import CTA from "@components/Sections/CTA";
import HeaderInformation from "@components/Sections/HeaderInformation";
import Process from "@components/Sections/Process";
import useChangeTitle from "@hooks/useChangeTitle";

function ProcessPage() {
    useChangeTitle("Process")
    return (
        <div className="process-page">
            <HeaderInformation />
            <Process />
            <CTA />
            <ContactForm />
        </div>
    )
}

export default ProcessPage;