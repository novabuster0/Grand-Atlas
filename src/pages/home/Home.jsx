import Hero from "../../components/Hero";
import Hook from "../../assets/images/homeHero.svg";
import BenchMark from "./sections/BenchMark";
import About from "./sections/About";
import Masterpeices from "./sections/Masterpeices";
import Locations from "./sections/Locations";
import LandMarks from "./sections/LandMarks";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
    //
    // GSAP Animation section
    //
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from("#navbar", { y: "-=100%", duration: 0.5 }, "initial1");
        tl.from("#body > #hero", { opacity: 0.3, duration: 0.5 }, "initial1");
        tl.from("#social", { x: "-=200%", opacity: 0 }, "initial2");
        gsap.set(".home-section", { opacity: 0, y: "+=50%" });

        ScrollTrigger.batch(".home-section", {
            start: "top bottom",
            onEnter: (elements) => {
                gsap.to(elements, {
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.15,
                    overwrite: true,
                    y: 0,
                });
            },
        });
    });

    //
    //returned Component
    //
    return (
        <div id="body" className="h-full flex flex-col overflow-hidden ">
            <Hero
                Hook={Hook}
                HT="Redefining the Horizon of Modern Luxury Living"
                PT="We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest"
                BT="Explore"
            />
            <div id="sections" className="flex flex-col gap-45">
                <BenchMark />
                <About />
                <Masterpeices />
                <Locations />
                <LandMarks />
            </div>
        </div>
    );
}
