import About from "@components/Sections/About";
import CTA from "@components/Sections/CTA";
import HeaderInformation from "@components/Sections/HeaderInformation";
import OurStory from "@components/Sections/OurStory";
import useChangeTitle from "@hooks/useChangeTitle";

function AboutPage() {
    useChangeTitle("About")
    return (
        <div className="about-page">
            <HeaderInformation />
            <About />
            <OurStory />
            <CTA />
        </div>
    )
}

export default AboutPage;