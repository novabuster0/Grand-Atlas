import fb from "/src/assets/images/fb.svg";
import x from "/src/assets/images/twitter.png";
import insta from "/src/assets/images/instagram.png";
import tiktok from "/src/assets/images/tiktok.png";
import Button from "./Button";
import { useMediaQuery } from "react-responsive";
export default function Hero({
    Hook,
    HT = "ungivenHead",
    PT = "ungivenPara",
    BT = "ungivenButton",
    showIcon = true,
    showBtn = true,
}) {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <div
            id="hero"
            className="h-screen w-screen bg-cover relative flex flex-col justify-center items-center bg-[rgba(0,0,0,0.5)]
                        not-md:w-full"
            style={{ backgroundImage: `url(${Hook})` }}
        >
            <h1
                className="md:w-[40%] w-full text-wrap font-playfair-display text-center text-[48px] font-bold text-[#EEEEEE] mb-8.25
                            not-md:text-2xl"
            >
                {HT}
            </h1>
            <p className="md:w-[65%] w-full text-center text-[20px] font-bold font-['Lato'] text-[#CEC7C7] mb-12.5">
                {PT}
            </p>
            {showBtn && <Button children={BT} />}
            {showIcon && !isMobile && (
                <div
                    id="social"
                    className="absolute bottom-30 left-9 flex flex-col gap-5.5"
                >
                    <Icon img={fb} href={"https://www.facebook.com"} />
                    <Icon img={x} href={"https://www.x.com"} />
                    <Icon img={insta} href={"https://www.instagram.com"} />
                    <Icon img={tiktok} href={"https://www.tiktok.com"} />
                </div>
            )}
        </div>
    );
}

function Icon({ img, href }) {
    return (
        <a
            className="flex justify-center items-center rounded-full  border-3 border-white p-2
                    hover:border-[#8E1616] hover:cursor-pointer transition-all "
            href={href}
        >
            <img src={img} className="w-full" />
        </a>
    );
}