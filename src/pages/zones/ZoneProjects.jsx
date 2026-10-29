import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeadLine from "./../../components/HeadLine";
import ProjectCard from "./../../components/ProjectCard";
import unitsIcon from "/src/assets/images/Developers/UnitsIcon.svg";
import api from "./../../utils/api";
export default function ZoneProjects() {
    const [zoneData, setZoneData] = useState({});
    const [units, setUnits] = useState({});
    const [loading, setLoading] = useState(true);
    const id = useParams().id;
    useEffect(() => {
        async function getZoneData(id) {
            let data = await api.get(`/zone/${id}`);
            setZoneData(data.data);
            setLoading(false);
            console.log(data.data);
        }
        getZoneData(id);
    }, []);

    return (
        <div>
            {loading ? (
                <div id="zone-projects" className="flex flex-col items-center">
                    <HeadLine content={"Loading Page..."} />
                </div>
            ) : (
                <div
                    id="zone-projects"
                    className="flex flex-col items-center gap-12"
                >
                    <HeadLine content={"Zone Projects"} />
                    <div
                        id="zone-projects-hero"
                        className="w-full h-131.25 px-9 "
                    >
                        <img
                            src={zoneData.images[0]}
                            alt=""
                            className="w-full h-full object-cover object-center rounded-3xl"
                        />
                    </div>
                    <div id="zone-projects-body">
                        {zoneData.projects.map((project) => {
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
