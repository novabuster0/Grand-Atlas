import NavbarItem from "./NavbarItem";
export default function Footer() {
    return (
        <div
            id="footer"
            className="bg-[#EBEBEB] pt-10 flex flex-col items-center w-full"
        >
            <div className="w-full flex items-start justify-around not-md:flex-col not-md:items-center not-md:gap-5">
                <div id="logo" className="">
                    <img
                        src="/src/assets/icons/Logo Option.svg"
                        width={"151px"}
                        alt="Icon"
                    />
                    <div
                        id="contact"
                        className="relative -top-4 flex flex-col gap-5.75 font-normal text-[#0A142F]"
                    >
                        <p id="phone" className="">
                            {"+1 (7635) 547-12-97"}
                        </p>
                        <p id="phone" className="">
                            {"support@lift.agency"}
                        </p>
                    </div>
                </div>
                <div id="links" className=" flex gap-40 ">
                    <div id="nav-footer">
                        <h3 className="font-bold text-[#0A142F] mb-3.75">
                            Quick Links
                        </h3>
                        <ul
                            id="quick-links"
                            className="flex flex-col gap-3 font-normal"
                        >
                            <NavbarItem to="\" name={"Home"} />
                            <NavbarItem to="\units" name={"Investors"} />
                            <NavbarItem to="\zones" name={"Zones"} />
                            <NavbarItem to="\developers" name={"Developers"} />
                            <NavbarItem to="\contactus" name={"Contact Us"} />
                        </ul>
                    </div>
                    <div id="about-footer">
                        <h3 className="font-bold mb-3.75 text-[#0A142F]">
                            About
                        </h3>
                        <ul
                            id="about-links"
                            className="flex flex-col gap-3 font-normal"
                        >
                            <NavbarItem to="\" name={"Grand Atlas"} />
                            <NavbarItem to="\" name={"Privacy Policy"} />
                            <NavbarItem to="\" name={"Legal"} />
                            <NavbarItem to="\" name={"Help"} />
                            <NavbarItem to="\" name={"Support"} />
                        </ul>
                    </div>
                </div>
                <div id="contact-form" className="w-fit flex flex-col gap-8.5">
                    <h4 className="font-normal text-[#0A142F]">Get In Touch</h4>
                    <div
                        id="input"
                        className="w-62 h-11.5 flex justify-start border-2 border-[#8E1616] rounded-md text-[#847D7D]"
                    >
                        <input
                            type="email"
                            placeholder="Get product updates"
                            name="user-email"
                            id="user-email"
                            className="pl-3.75 pr-0 focus:outline-none"
                        />
                        <button
                            id="send"
                            className="w-42.5 h-full flex items-center justify-center bg-[#8E1616]"
                        >
                            <img
                                src="/src/assets/images/arrows-down-top-move-1.svg"
                                w="13px"
                                alt=""
                            />
                        </button>
                    </div>
                    <ul
                        id="social"
                        className="w-full flex justify-start gap-3.75 relative -top-3.25"
                    >
                        <a href="#">
                            <li
                                id="linkedin"
                                className="w-7.75 h-7.75 flex justify-center items-center border-3 border-[rgba(142,22,22,0.1)] rounded-full"
                            >
                                <img
                                    src="/src/assets/images/Linkedin.svg"
                                    width={"12px"}
                                    alt=""
                                />
                            </li>
                        </a>
                        <a href="#">
                            <li
                                id="facebook"
                                className="w-7.75 h-7.75 flex justify-center items-center border-3 border-[rgba(142,22,22,0.1)] rounded-full"
                            >
                                <img
                                    src="/src/assets/images/Facebook.svg"
                                    width={"7px"}
                                    alt=""
                                />
                            </li>
                        </a>
                        <a href="#">
                            <li
                                id="twitter"
                                className="w-7.75 h-7.75 flex justify-center items-center border-3 border-[rgba(142,22,22,0.1)] rounded-full"
                            >
                                <img
                                    src="/src/assets/images/Twitter.svg"
                                    width={"12px"}
                                    alt=""
                                />
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
            <hr className="w-[80%]  text-[#0A142F]" />
            <p className="m-8.5">© 2020 Lift Media. All rights reserved</p>
        </div>
    );
}
