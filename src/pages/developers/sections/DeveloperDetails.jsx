import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeadLine from "../../../components/HeadLine";
import api from "../../../utils/api";
import ProjectCard from "../../../components/ProjectCard";
import unitsIcon from "/src/assets/images/Developers/UnitsIcon.svg";
export default function DeveloperDetails() {
    const id = useParams().id;
    const [developer, setDeveloper] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getDeveloper(id) {
            const response = await api.get(`/developer/${id}`);
            setDeveloper(response.data);
            console.log(response.data);

            setLoading(false);
        }
        getDeveloper(id);
    }, []);
    return (
        <div>
            {loading ? (
                <div className="w-full flex justify-center">
                    <HeadLine content={"Loading Page ..."} />
                </div>
            ) : (
                <div
                    id="developers"
                    className="w-full flex items-center flex-col"
                >
                    <HeadLine content={"Developers Projects"} />

                    <img
                        src={developer.images[0]}
                        alt=""
                        className="w-[95%] max-h-131.5 mt-12 object-cover object-center rounded-3xl"
                    />
                    <div
                        id="project-cards"
                        className="w-full flex flex-wrap justify-evenly my-15 gap-y-30 not-md:mx-5"
                    >
                        {developer.projects.map((project) => {
                            const proberties = {
                                Units: {
                                    img: unitsIcon,
                                    value: 50,
                                    probName: "m",
                                },
                            };
                            return (
                                <ProjectCard
                                    endpoint={"projects"}
                                    projectId={project.id}
                                    proberties={proberties}
                                    linkRef={`projects/${project.id}`}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
