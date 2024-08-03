import React from "react";
import FadeInSection from "./FadeInSection";

const FeaturesSection: React.FC = () => {
    return (
        <>
            <FadeInSection>
                <div className=" mb-2 mt-2" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                    <div className="grid grid-cols-2 gap-2 p-10 items-center">
                        <div>
                            <p className="text-xl font-semibold">Effortless Integration</p>
                        </div>
                        <div >
                            <p className="text-justify font-medium">"Easily copy and paste the code into your project files."</p>
                            <p className="text-justify">No need to hassle with complex setups or installations. Our components are designed to be as straightforward as possible .. just copy the code and you’re ready to go.</p>
                        </div>
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="bg-custom-gradient mb-2 mt-2" style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", }}>
                    <div className="grid grid-cols-2 gap-2 p-10 items-center">
                        <div >
                            <p className="text-justify font-medium">"No need to install any dependencies."</p>
                            <p className="text-justify">Forget about managing additional packages or dealing with version conflicts. Our components are pure React and work seamlessly without requiring any extra libraries.</p>
                        </div>

                        <div>
                            <p className="text-xl font-semibold float-right">No Dependencies Required</p>
                        </div>
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className=" mb-2 mt-2" style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>

                    <div className="grid grid-cols-2 gap-2 p-10 items-center">
                        <div>
                            <p className="text-xl font-semibold">Simplifying Developers' Lives</p>
                        </div>

                        <div>
                            <p className="text-justify font-medium">"Makes developers' lives easier."</p>
                            <p className="text-justify">Unlike pre-packaged libraries, our components are easy to understand and modify. Tailor them to suit your exact requirements without digging through extensive documentation or source code.</p>
                        </div>

                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="bg-custom-gradient mb-2 mt-2" style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>

                    <div className="grid grid-cols-2 gap-2 p-10 items-center">
                        <div>
                            <p className="text-justify font-medium">"Easily modify compared to libraries."</p>
                            <p className="text-justify">Unlike pre-packaged libraries, our components are easy to understand and modify. Tailor them to suit your exact requirements without digging through extensive documentation or source code.</p>
                        </div>

                        <div>
                            <p className="text-xl font-semibold float-right">Easy to Modify</p>
                        </div>

                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className=" mb-2 mt-2" style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>

                    <div className="grid grid-cols-2 gap-2 p-10 items-center">
                        <div>
                            <p className="text-xl font-semibold ">Versatile and Customizable</p>
                        </div>

                        <div>
                            <p className="text-justify font-medium">"Built considering all kinds of use cases."</p>
                            <p className="text-justify">Whether you’re working on a small project or a large-scale application, our components are designed to fit a wide range of scenarios. They are versatile and can be adapted to meet your specific needs.</p>
                        </div>

                    </div>
                </div>
            </FadeInSection >
        </>
    )
}

export default FeaturesSection;