import React from "react";
import HeadLine from "./../../../components/HeadLine";
import rightArrow from "/src/assets/images/HomeImgs/RightArrow.svg";
import Button from "./../../../components/Button";
import aboutImg from "/src/assets/images/HomeImgs/AboutImg.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function About() {
    return (
        <div
            id="about"
            className="home-section flex flex-col items-center px-9 gap-16.25"
        >
            <HeadLine content={"About Grand Atlas"} />
            <div
                id="section-body"
                className="flex not-md:flex-col  items-center gap-17.5"
            >
                <img
                    id="section-body-img"
                    src={aboutImg}
                    alt="about"
                    className="border-5 border-[#8E1616] rounded-t-[100px]"
                />
                <div id="section-body-info" className="flex flex-col gap-23">
                    <p className="text-center not-md:text-start text-2xl font-normal text-[#554E4E] leading-[150%]">
                        We began with a singular, uncompromising vision: to
                        bridge the gap between world-class architecture and the
                        individuals who define our global culture. We recognized
                        that for the discerning client, a home is rarely just a
                        physical structure; it is a curated environment, a
                        private gallery, and the ultimate expression of a life
                        well-lived. Our journey started not in the pursuit of
                        transactions, but in the pursuit of excellence. We set
                        out to dismantle the traditional, high-volume real
                        estate model in favor of a bespoke, 'private office'
                        approach—one where quality always supersedes quantity,
                        and where every client is treated as the sole focus of
                        our firm, We don't just find you a home; we secure your
                        peace of mind through a veil of absolute professional
                        confidentiality.
                    </p>
                    <Button>
                        Know More
                        <img
                            src={rightArrow}
                            className="relative m-2 my-auto top-0.5"
                        />
                    </Button>
                </div>
            </div>
        </div>
    );
}
