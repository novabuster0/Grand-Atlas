import Hero from "../../components/Hero";
import Hook from "../../assets/images/UnitsHook.png";
import api from "../../utils/api";
import { useEffect, useState } from "react";
import Search from "./sections/Search";
import UnitsInfo from "./sections/UnitsInfo";
import HeadLine from "./../../components/HeadLine";

export default function Units() {
    const [units, setUnits] = useState([]);
    const [searchUnits, SetSearchUnits] = useState([]);

    const [loading, setloading] = useState(true);

    useEffect(() => {
        async function getUnits() {
            const response = await api.get("/unit");
            const data = response.data;
            setUnits(data);
            SetSearchUnits(data);

            setloading(false);
        }

        getUnits();
    }, []);

    return (
        <div id="units" className="font-Lato">
            {loading ? (
                <div className="w-full flex justify-center">
                    <HeadLine content={"Loading Page ..."} />
                </div>
            ) : (
                <div className="h-full flex flex-col gap-35">
                    <Hero
                        Hook={Hook}
                        HT="Where Visionary Design Meets Daily Life"
                        PT="Experience a collection of residences designed as personal sanctuaries. Each unit balances expansive city views with artisanal textures and quiet, light-filled interiors to create the ultimate retreat from the world"
                        showBtn={false}
                    />
                    <Search setter={SetSearchUnits} units={units} />
                    <UnitsInfo unitsData={searchUnits} />
                </div>
            )}
        </div>
    );
}
