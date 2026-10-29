import { useEffect, useState } from "react";
import heroImg from "/src/assets/images/developersHook.png";
import api from "./../../utils/api";
import DeveloperCard from "./../../components/DeveloperCard";
import palmhillsLogo from "/src/assets/images/HomeImgs/PalmhillsLogo.svg";
import HeadLine from "../../components/HeadLine";
import Hero from "../../components/Hero";
export default function Developers() {
    const [developers, setDevelopers] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getDevelopers() {
            const response = await api.get("/developer");
            setDevelopers(response.data);
            setLoading(false);
        }
        getDevelopers();
    });
    return (
        <div>
            {loading ? (
                <div className="w-full flex justify-center">
                    <HeadLine content={"Loading Page ..."} />
                </div>
            ) : (
                <div id="developers" className="flex flex-col">
                    <Hero
                        Hook={heroImg}
                        HT="Defining the Future Skyline."
                        PT="Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers."
                        showBtn={false}
                    />
                    <div className="flex flex-wrap my-22 gap-5 not-md:mx-5 gap-y-22.5">
                        {developers.map((developer) => {
                            return (
                                <DeveloperCard
                                    img={developer.images[0]}
                                    developerImg={palmhillsLogo}
                                    badgeText={"NewCairo"}
                                    developerId={developer.id}
                                />
                            );
                        })}
                        {developers.map((developer) => {
                            return (
                                <DeveloperCard
                                    img={developer.images[0]}
                                    developerImg={palmhillsLogo}
                                    badgeText={"NewCairo"}
                                    developerId={developer.id}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
