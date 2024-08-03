import React from "react";

const HeroSection: React.FC = () => {
    return (
        <>
            <div className="h-screen bg-custom-gradient flex justify-center items-center p-2">
                <Text />
            </div>
        </>
    )
}

const Text = () => {

    return (
        <>
            <div>
                <h1 className="tracking-in-contract-bck text-xl md:text-2xl font-bold">ReUsableReact UI makes you effortless react reusable components!!</h1>
                <p className="text-base tracking-in-contract-bck">Streamline your development process with our ready-to-use React component code. Simply copy the code and paste it in your file, you can quickly integrate reusable components into your projects without no dependencies.</p>
            </div>
        </>
    )
}
export default HeroSection;