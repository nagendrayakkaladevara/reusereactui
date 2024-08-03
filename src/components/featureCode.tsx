import React from "react";
import Button from "../reactreusablecomponents/button";
import CodeImage from '../assets/ray-so-exportdark.png';
import FadeInSection from "./FadeInSection";

const FeaturesCode: React.FC = () => {
    return (
        <>

            <div className="">
                <div className="bg-custom-gradient ">
                    <div className="flex justify-center">
                        <p className="tracking-tight text-gray-500 md:text-lg dark:text-gray-400">Example code snippet</p>
                        <picture>
                            <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/26a1/512.webp" type="image/webp" />
                            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/26a1/512.gif" alt="⚡" width={32} height={32} />
                        </picture>

                        {/* <picture style={{ transform: "rotate(180deg)"}}>
                            <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/261d_1f3fb/512.webp" type="image/webp" />
                            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/261d_1f3fb/512.gif" alt="☝" width="32" height="32" />
                        </picture> */}
                    </div>
                    <FadeInSection >
                        <a href="https://gist.github.com/nagendrayakkaladevara/8283461d6b9e608d892ca23a7479ff51" target="_black" style={{ width: "100%" }} className="flex justify-center"><img src={CodeImage} style={{ width: "70%" }} /></a>
                    </FadeInSection>
                </div>
                <div className="flex justify-center  bg-custom-gradient pb-10">
                    <FadeInSection>

                        <div className="flex gap-2 items-center">
                            <div>
                                <Button variant="primary" size="small">Primary Small</Button>
                            </div>
                            <div>
                                <Button variant="secondary" size="medium">Secondary Medium</Button>
                            </div>
                            <div>
                                <Button variant="success" size="large">Success Large</Button>
                            </div>
                            <div>
                                <Button variant="danger" isLoading>Loading Button</Button>
                            </div>
                            <div>
                                <Button variant="warning" icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                                </svg>}>Button with Icon</Button>
                            </div>
                            <div>
                                <Button variant="info" isDisabled>Disabled Button</Button>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>

        </>
    )
}

export default FeaturesCode;