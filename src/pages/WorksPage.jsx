import CTA from "@components/Sections/CTA";
import HeaderInformation from "@components/Sections/HeaderInformation";
import Projects from "@components/Sections/Projects";
import useChangeTitle from "@hooks/useChangeTitle";

function WorksPage() {
    useChangeTitle("Works")
    return (
        <div className="works-page">
            <HeaderInformation />
            <Projects />
            <CTA />
        </div>
    )
}

export default WorksPage;