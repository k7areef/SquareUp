import ContactForm from "@components/Sections/ContactForm";
import CTA from "@components/Sections/CTA";
import Faqs from "@components/Sections/Faqs";
import HeroSection from "@components/Sections/HeroSection";
import OurServices from "@components/Sections/OurServices";
import WhyChooseUs from "@components/Sections/WhyChooseUs";
import useChangeTitle from "@hooks/useChangeTitle";

function HomePage() {
    useChangeTitle("Home")
    return (
        <div className="home-page">
            <HeroSection />
            <OurServices />
            <WhyChooseUs />
            <Faqs />
            <CTA />
            <ContactForm />
        </div>
    )
}

export default HomePage;