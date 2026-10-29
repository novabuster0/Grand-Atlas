import { Link, useParams } from "react-router-dom";
import { formatPrice } from "../utils/Functions";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import HeadLine from "./HeadLine";
import api from "../utils/api";

export default function ProjectCard({
    endpoint,
    projectId,
    proberties,
    linkRef = "",
}) {
    const [project, setProject] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getProject(projectId) {
            let data = await api.get(`/${endpoint}/${projectId}`);
            setProject(data.data);
            setLoading(false);
        }
        getProject(projectId);
    }, []);
    return (
        <div>
            {loading ? (
                <div id="zone-projects" className="flex flex-col items-center">
                    <HeadLine content={"Loading Card..."} />
                </div>
            ) : (
                <div className="card w-100 shadow-sm font-Lato">
                    <figure className="relative">
                        <img
                            src={project.images[0]}
                            alt="Shoes"
                            className="w-110.5 h-71"
                        />

                        <div className=" badge badge-secondary w-fit h-7 absolute top-7 right-2 font-bold text-[16px] bg-[#21E008] border-0">
                            {project.status != undefined
                                ? project.status
                                : "null"}
                        </div>
                    </figure>

                    <div className="card-body gap-4 p-0">
                        <div
                            id="project-info"
                            className="flex whitespace-nowrap  justify-between border border-[#CEC7C7] px-5.5 py-2.25"
                        >
                            {Object.keys(proberties).map((key, index) => {
                                const probertyData = proberties[key];

                                return (
                                    <Proberty
                                        key={project.id + probertyData.probName}
                                        value={probertyData.value}
                                        probName={probertyData.probName}
                                        img={probertyData.img}
                                        border={
                                            index !=
                                            Object.keys(proberties).length - 1
                                        }
                                    />
                                );
                            })}
                        </div>

                        <div
                            id="title-price"
                            className="flex items-center justify-between px-3.75"
                        >
                            <h2 className="font-playfair-display font-semibold text-[24px] text-[#8E1616]">
                                {project.title_en
                                    ? project.title_en
                                    : project.name_en}
                            </h2>
                            <p
                                id="price"
                                className="max-w-fit font-bold text-[26px] text-[#A18E77]"
                            >
                                {formatPrice(
                                    project.price ? project.price : "0",
                                ) + "EGP"}
                            </p>
                        </div>
                        <p className="font-normal text-[16px] text-[#847D7D] px-3.5 text-start">
                            {project.description_en}
                        </p>

                        <div className="card-actions mb-5.25 px-4 ">
                            <Link to={`/${linkRef}`} className="w-full">
                                <button
                                    className="
                                btn btn-error w-full
                                bg-white border-[#8E1616] text-[#8E1616]
                                hover:border-[#8E1616] hover:bg-[#8E1616] hover:text-white"
                                >
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function Proberty({ probName, value = 0, img, border = true }) {
    return (
        <div
            id={probName}
            className={twMerge(
                "flex w-fit",
                border ? "border-r border-[#CEC7C7] pr-3" : "",
            )}
        >
            <img src={img} />
            <p
                id="info"
                className="ml-2 text-[#A18E77] text-[16px] font-normal"
            >
                {value + " " + probName}
            </p>
        </div>
    );
}
