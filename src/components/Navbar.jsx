import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
    return (
        <div className="w-full" id="navbar-container">
            <div id="hamburger-btn" className="w-full md:hidden relative">
                <label className=" btn btn-circle swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" id="menu-toggle" />

                    {/* hamburger icon */}
                    <svg
                        className="swap-off fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512"
                    >
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>

                    {/* close icon */}
                    <svg
                        className="swap-on fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512"
                    >
                        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                    </svg>
                </label>
            </div>
            <ul
                id="header-navbar"
                className="px-2 w-full flex-2 flex justify-between items-center py-5 font-bold text-[20px]
                            not-md:hidden relative
                        "
            >
                <NavbarItem to="\" name={"Home"} />
                <NavbarItem to="\units" name={"Units"} />
                <NavbarItem to="\zones" name={"Zones"} />
                <NavbarItem to="\developers" name={"Developers"} />
                <NavbarItem to="\contactus" name={"Contact Us"} />
            </ul>
        </div>
    );
}
