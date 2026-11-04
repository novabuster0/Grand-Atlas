import Button from "./Button";
import Navbar from "./Navbar";
import Logo from "../assets/icons/Logo_Option.svg";
export default function Header() {
    return (
        // pr-9
        <div
            id="navbar"
            className="min-h-26.25  flex items-center justify-between  font-Lato
                        not-md:flex-col not-md:mb-5 md:gap-60 md:mr-9"
        >
            <img
                src={Logo}
                width={"116px"}
                alt="Logo"
                id="logo"
                className="md:mr-1 "
            />
            <Navbar />
            <Button children={"Register"} classes={"max-w-[150px]"} />
        </div>
    );
}
