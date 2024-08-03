import React from "react";
import HeroSection from "../components/hero";
import FeaturesSection from "../components/featuresSection";
import FeaturesCode from "../components/featureCode";

const LandingPage: React.FC = () => {
    return (
        <>
            <div >
                <HeroSection />
                <FeaturesCode />
                <FeaturesSection />
            </div>
        </>
    )
}
export default LandingPage;