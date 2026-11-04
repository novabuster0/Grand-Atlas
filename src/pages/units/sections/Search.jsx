import { useState } from "react";
import { formatPrice, titleCase } from "./../../../utils/Functions";
import searchImg from "/src/assets/images/Units/SearchIcon.svg";
import Button from "../../../components/Button";
import { handleSearch } from "/src/utils/Functions.js";
import { twMerge } from "tailwind-merge";
export default function Search({ zones = [1, 2, 3], setter, units }) {
    const pricerangeList = [500000, 1000000, 10000000, 20000000];
    const status = ["upcoming", "available", "soldout"];
    const bedrooms = [undefined, 3, 5, 7, 10];
    const bathrooms = [undefined, 3, 5, 7, 10];
    /*
        searchParams : 
                {
                    ParamName:{Max:-1 , specific:-1}
                }
    */

    const [searchParams, setSearchParams] = useState(Object.create(null));
    return (
        <div id="units-search" className="flex-col flex gap-15.25">
            <div
                id="search-filters"
                className="h-fit flex not-md:flex-col not-md:mx-5 not-md:gap-4 items-center justify-between
                        text-[#BEBEBE] font-bold text-2xl
                        border-[#8E1616] border rounded-lg"
            >


                <SelectFilter
                    name={"bedrooms"}
                    valuesList={bedrooms}
                    setter={setSearchParams}
                />
                <SelectFilter
                    name={"bathrooms"}
                    valuesList={bathrooms}
                    setter={setSearchParams}
                />
                <SelectFilter
                    name={"status"}
                    valuesList={status}
                    setter={setSearchParams}
                    type="specific"
                />
                <SelectFilter
                    name={"price"}
                    valuesList={pricerangeList}
                    borderR={false}
                    setter={setSearchParams}
                />
            </div>
            <div className="w-full flex items-center justify-center">
                <Button
                    children={"search"}
                    onclick={() => {
                        setter(units);
                        handleSearch(units, setter, searchParams);
                    }}
                />
            </div>
        </div>
    );
}

function SelectFilter({
    name,
    valuesList,
    borderR = true,
    setter,
    type = "max",
}) {
    let labelName = type.toLowerCase() === "max" ? `Max ${name}` : name;
    let border = borderR ? "pr-3 border-r border-r-[#8E1616]" : "";
    return (
        <div className={twMerge("w-full flex flex-col", border)}>
            <label htmlFor={name} className="text-start pl-3">
                {labelName}
            </label>
            <select
                onChange={(e) => {
                    handleSelectChange(e.target.value, setter, name, type);
                }}
                id={name}
                className={
                    "w-full select select-ghost hover:cursor-pointer text-[#BEBEBE] font-bold text-2xl open:outline-none focus:outline-none overflow-hidden "
                }
            >
                {valuesList.map((item, index) => {
                    if (typeof item == typeof 0) {
                        return (
                            <option
                                key={item}
                                id={item}
                                value={item}
                                className="text-[#BEBEBE] active:bg-[#8E1616] active:text-white"
                            >
                                {formatPrice(item)}
                            </option>
                        );
                    }
                    return (
                        <option
                            key={item}
                            id={item}
                            value={item}
                            className="text-[#BEBEBE] active:bg-[#8E1616] active:text-white"
                        >
                            {item}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

// sets the new value in dataObject(searchParams)
function handleSelectChange(value, setter, name, type) {
    setter((prev) => {
        const newData = prev;
        newData[name] = {};
        newData[name][type] = value;
        return newData;
    });
}
