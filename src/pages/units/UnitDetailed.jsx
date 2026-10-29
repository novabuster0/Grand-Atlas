import LocationIcon from "/src/assets/images/Units/LocationIcon.svg";
import { formatPrice } from "./../../utils/Functions";
import Button from "./../../components/Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import HeadLine from "../../components/HeadLine";
export default function UnitDetailed() {
    const [unit, setUnit] = useState({});
    const [loading, setLoading] = useState(true);
    const unitId = useParams().id;

    useEffect(() => {
        async function getUnit(unitId) {
            const data = await api.get(`/unit/${unitId}`);
            setUnit(data.data);
            setLoading(false);
            console.log(data);
        }
        getUnit(unitId);
    }, []);

    useEffect(() => {
        console.log(unit);
    }, [unit]);
    return (
        <>
            {loading ? (
                <div className="w-full flex justify-center">
                    <HeadLine content={"Loading Page ..."} />
                </div>
            ) : (
                <div id="" className="font-Lato flex flex-col gap-16 mb-37">
                    <HeroSection unit={unit} />
                    <UnitInfo unit={unit} />
                </div>
            )}
        </>
    );
}

function HeroSection({ unit }) {
    return (
        <div className="w-full flex flex-col gap-2.5 px-7.5">
            <div className="carousel h-140.5">
                {unit.images.map((img, index) => (
                    <div
                        key={index}
                        id={`slide${index}`}
                        className="carousel-item relative w-full overflow-clip rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                    >
                        <div
                            id={`item${index}`}
                            className="carousel-item w-full"
                        >
                            <img
                                src={img}
                                alt="Tailwind CSS gallery"
                                className="w-full"
                            />
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a
                                href={`#slide${index - 1 >= 0 ? index - 1 : unit.images.length - 1}`}
                                className="btn btn-circle"
                            >
                                ❮
                            </a>
                            <a
                                href={`#slide${index + 1 < unit.images.length ? index + 1 : 0}`}
                                className="btn btn-circle"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="h-45 flex  justify-center gap-2">
                {unit.images.map((img, index) => (
                    <a
                        href={`#slide${index}`}
                        className="max-w-fit flex-1 rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                    >
                        <img
                            className="h-45 w-full bg-contain bg-center"
                            src={img}
                            alt=""
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}

function UnitInfo({ unit }) {
    return (
        <div className="px-9.25 flex flex-col gap-17.25">
            <div id="header" className="flex justify-between">
                <div id="name_location" className="flex flex-col gap-2.75">
                    <h2
                        id="name"
                        className="font-bold text-[40px] text-[#8E1616]"
                    >
                        {unit.title_en}
                    </h2>
                    <div
                        id="location"
                        className="text-nowrap flex gap-1 font-medium text-[20px] text-[#847D7D]"
                    >
                        <img src={LocationIcon} alt="" />
                        <p className="">Location Goes Here</p>
                    </div>
                </div>
                <div
                    id="price"
                    className="font-bold text-[40px] text-[#A18E77]"
                >
                    {formatPrice(unit.price)}
                </div>
            </div>
            <div
                id="body"
                className="flex justify-between not-md:flex-col not-md:gap-5"
            >
                <div id="info" className="flex-1 flex flex-col gap-6">
                    <h3
                        id="info-header"
                        className="font-bold text-[26px] text-[#1D1616]"
                    >
                        At a glance
                    </h3>
                    <ul
                        id="info-list"
                        className="flex flex-col gap-7.5 font-normal pl-8 text-[26px] text-[#847D7D] list-disc"
                    >
                        <li id="info-item-1">item1</li>
                        <li id="info-item-2">item2</li>
                        <li id="info-item-3">item3</li>
                        <li id="info-item-4">item4</li>
                    </ul>
                </div>
                <div
                    id="description-and-cta"
                    className="flex-1 flex flex-col gap-15.5"
                >
                    <div
                        id="description"
                        className="text-start flex flex-col gap-6.25"
                    >
                        <h3
                            id="description-header"
                            className="font-bold text-[26px] text-[#1D1616]"
                        >
                            Overview
                        </h3>
                        <p className=" font-normal text-[26px] text-[#847D7D]">
                            {unit.description_en}
                        </p>
                    </div>
                    <div id="cta-btns" className="flex justify-between gap-5.5">
                        <button
                            className="btn btn-outline btn-success flex-1 h-fit px-0 py-3.75 shadow-none rounded-lg 
                            bg-[#007100] outline-[#007100] text-white 
                            hover:bg-white hover:text-[#007100]"
                        >
                            Contact via WhatsApp
                        </button>
                        <Button
                            classes={"w-none h-full flex-1"}
                            children={"Call"}
                            onclick={() => {}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
