import Hero from "../../components/Hero";
import Hook from "../../assets/images/zonesHook.png";
import api from "../../utils/api";
import { useEffect, useState } from "react";
import HeadLine from "../../components/HeadLine";
import { Link } from "react-router-dom";

export default function Zones() {
    const [zones, setZones] = useState([]);
    const [loading, setLoading] = useState(true);
    // getting zones info
    useEffect(() => {
        async function getZones() {
            const response = await api.get("/zone");
            const data = response.data;
            setZones(data);
            setLoading(false);
            console.log(data);
        }
        getZones();
    }, []);
    return (
        <div className=" h-full">
            <Hero
                Hook={Hook}
                HT="Destinations Defined by Distinction"
                PT="From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center, explore our guide to the neighborhoods that mirror your ambition and your aesthetic."
                showBtn={false}
            />
            {loading ? (
                <div className="w-full flex justify-center">
                    <HeadLine content={"Loading Page ..."} />
                </div>
            ) : (
                <div
                    id="zones"
                    className="flex overflow-hidden my-22 gap-5 not-md:flex-col not-md:mx-5 "
                >
                    {zones.map((zone) => (
                        <ZoneCard key={zone.id} zone={zone} />
                    ))}
                </div>
            )}
        </div>
    );
}

function ZoneCard({ zone }) {
    return (
        <Link
            to={`/zones/${zone.id}`}
            className="relative flex min-h-64 w-full justify-center items-center bg-cover bg-center 
                        hover:scale-120 hover:*:opacity-100 hover:z-10 z-1 transition-all
                        not-md:rounded-xl"
            style={{ backgroundImage: `url("${zone.images[0]}")` }}
        >
            <div
                className="w-full h-full flex flex-col items-center justify-center 
                            backdrop-blur-[3px] rounded-lg
                            text-6xl font-playfair-display font-bold text-[hsl(48,90%,95%)]
                            opacity-0  transition-all "
            >
                <h1>{zone.name_en}</h1>
                <p className="text-[14px] font-Lato font-normal">Know More</p>
            </div>
        </Link>
    );
}
