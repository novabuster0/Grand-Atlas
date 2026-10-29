import ProjectCard from "../../../components/ProjectCard";
import bathroomImg from "/src/assets/images/Units/Bathrooms.svg";
import bedroomImg from "/src/assets/images/Units/Bedrooms.svg";
import sizeImg from "/src/assets/images/Units/Size.svg";

export default function UnitsInfo({ unitsData }) {
    return (
        <div className="flex    justify-center flex-wrap gap-5 px-9">
            {unitsData.map((unit) => {
                return (
                    <ProjectCard
                        key={unit.id}
                        endpoint={"unit"}
                        projectId={unit.id}
                        linkRef={`units/${unit.id}`}
                        proberties={{
                            bathrooms: {
                                probName: "bathrooms",
                                value: unit.bathrooms,
                                img: bathroomImg,
                            },
                            bedrooms: {
                                probName: "bedrooms",
                                value: unit.bedrooms,
                                img: bedroomImg,
                            },
                            size: {
                                probName: "m",
                                value: unit.size,
                                img: sizeImg,
                            },
                        }}
                    />
                );
            })}
        </div>
    );
}
