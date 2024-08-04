import React from "react";

const Loader: React.FC = () => {
    return (
        <>
            <div className="flex justify-center" style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px", padding:"10px 20px", borderRadius:"5px" }} >
                <span className="reuseloader" ></span>
            </div>
        </>
    )
}
export default Loader;