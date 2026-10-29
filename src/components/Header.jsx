import Button from "./Button";
import Navbar from "./Navbar";

export default function Header() {
    return (
        // pr-9
        <div
            id="navbar"
            className="min-h-26.25 flex items-center justify-between  font-Lato
                        not-md:flex-col not-md:mb-5 md:gap-60 md:mr-9"
        >
            <img
                src="/src/assets/icons/Logo Option.svg"
                width={"116px"}
                alt="Logo"
                id="logo"
                className="md:mr-1 "
            />
            <Navbar />
            <Button children={"Register"} />
        </div>
    );
}
