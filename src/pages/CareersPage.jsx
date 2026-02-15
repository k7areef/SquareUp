import CTA from "@components/Sections/CTA";
import Features from "@components/Sections/Features";
import HeaderInformation from "@components/Sections/HeaderInformation";
import JobOpenings from "@components/Sections/JobOpenings";
import useChangeTitle from "@hooks/useChangeTitle";

function CareersPage() {
    useChangeTitle("Careers")
    return (
        <div className="careers-page">
            <HeaderInformation />
            <Features />
            <JobOpenings />
            <CTA />
        </div>
    )
}

export default CareersPage;