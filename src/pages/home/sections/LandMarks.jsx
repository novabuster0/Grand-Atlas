import React from "react";

import HeadLine from "./../../../components/HeadLine";
import palmhillsProject from "/src/assets/images/HomeImgs/PalmhillsProject.png";
import palmhillsLogo from "/src/assets/images/HomeImgs/PalmhillsLogo.svg";
import hayahcityProject from "/src/assets/images/HomeImgs/Hayahcity_Project.png";
import Slick from "react-slick";
import DeveloperCard from "../../../components/DeveloperCard";
import { useMediaQuery } from "react-responsive";
const Slider = Slick.default ?? Slick;

export default function LandMarks() {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const settings = {
        draggable: true,
        swipe: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1,
    };
    return (
        <div
            id="container"
            className="home-section md:pl-10  mb-36.25 flex flex-col gap-9.5 items-center"
        >
            <HeadLine content={"Future Landmarks"} />
            <div>
                <div className="slider-container w-screen">
                    <Slider {...settings}>
                        <DeveloperCard
                            btnText={"testing"}
                            img={palmhillsProject}
                            developerImg={palmhillsLogo}
                            badgeText={"new cairo"}
                        />
                        <DeveloperCard
                            btnText={"testing"}
                            img={hayahcityProject}
                            developerImg={palmhillsLogo}
                            badgeText={"new cairo"}
                        />
                        <DeveloperCard
                            btnText={"testing"}
                            img={hayahcityProject}
                            developerImg={palmhillsLogo}
                            badgeText={"new cairo"}
                        />
                        <DeveloperCard
                            btnText={"testing"}
                            img={hayahcityProject}
                            developerImg={palmhillsLogo}
                            badgeText={"new cairo"}
                        />
                        <DeveloperCard
                            btnText={"testing"}
                            img={hayahcityProject}
                            developerImg={palmhillsLogo}
                            badgeText={"new cairo"}
                        />
                    </Slider>
                </div>
            </div>
        </div>
    );
}
