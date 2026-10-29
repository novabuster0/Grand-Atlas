import React from "react";
import HeadLine from "../../../components/HeadLine";
import Location from "/src/assets/images/HomeImgs/Location.png";
export default function Locations() {
    return (
        <div className="home-section w-full flex flex-col items-center gap-7.25">
            <HeadLine content={"Strategic Locations"} />
            <img src={Location} alt="" className="w-full" />
        </div>
    );
}
