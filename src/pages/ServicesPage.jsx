import CTA from "@components/Sections/CTA";
import HeaderInformation from "@components/Sections/HeaderInformation";
import Services from "@components/Sections/Services";
import useChangeTitle from "@hooks/useChangeTitle";

function ServicesPage() {
    useChangeTitle("Services")
    return (
        <section className="services-page-section" id="servicesPage">
            <div className="container">
                <HeaderInformation />
                <Services />
                <CTA />
            </div>
        </section>
    )
}

export default ServicesPage;