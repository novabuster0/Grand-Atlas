import { Link } from "react-router-dom";

export default function NavbarItem({ to, name }) {
    return (
        <li
            id="navbar-item"
            className="text-[#847D7D] py-1 transition-all hover:text-[#8E1616] "
        >
            <Link to={to}>{name}</Link>
        </li>
    );
}
