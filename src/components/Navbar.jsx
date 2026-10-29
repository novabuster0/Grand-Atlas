import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
    return (
        <ul
            className="px-2 w-full flex-2 flex justify-between items-center py-5 font-bold text-[20px]
                        "
        >
            <NavbarItem to="\" name={"Home"} />
            <NavbarItem to="\units" name={"Units"} />
            <NavbarItem to="\zones" name={"Zones"} />
            <NavbarItem to="\contactus" name={"Contact Us"} />
        </ul>
    );
}
