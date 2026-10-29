import Hero from "../../components/Hero";
import Hook from "/src/assets/images/contactUsHook.png";

import locationIcon from "/src/assets/icons/locationIcon.svg";
import mailIcon from "/src/assets/icons/mailIcon.svg";
import phoneIcon from "/src/assets/icons/phoneIcon.svg";
import telephoneIcon from "/src/assets/icons/telephoneIcon.svg";

import facebookIcon from "/src/assets/icons/facebookIcon.svg";
import twitterIcon from "/src/assets/icons/twitterIcon.svg";
import instagramIcon from "/src/assets/icons/instagramIcon.svg";
import tiktokIcon from "/src/assets/icons/tiktokIcon.svg";
import Button from "../../components/Button";
export default function Contactus() {
    return (
        <div className="h-full flex flex-col mb-25">
            <Hero
                Hook={Hook}
                HT="Connected Globally. Available Locally."
                PT="With experts positioned in the world's most influential markets, we are never more than a conversation away. Reach out to our team to experience a new standard of real estate advisory."
                showBtn={false}
                showIcon={false}
            />
            <main
                id="contact-us-body"
                className="flex not-md:flex-col gap-5 px-9.25 mt-30 font-Lato"
            >
                <div
                    id="contact-us-body-info"
                    className="flex flex-col gap-9 flex-1"
                >
                    <div id="info-header" className="flex flex-col gap-5">
                        <h2
                            id="info-headline"
                            className="font-playfair-display text-[32px] font-semibold text-black
                                    -mb-2.5"
                        >
                            Contact Information
                        </h2>
                        <p
                            id="info-description"
                            className="font-normal text-xl text-[#847D7D]"
                        >
                            Our team is available for private consultations and
                            off-market inquiries. We operate with absolute
                            discretion to ensure your real estate objectives are
                            met with precision.
                        </p>
                    </div>
                    <ul id="info-contact" className="">
                        <InfoContactIcon
                            img={locationIcon}
                            contact={
                                "Minusio, Lake Maggiore, Switzerland — ref. LOC1771"
                            }
                        />

                        <InfoContactIcon
                            img={mailIcon}
                            contact={"Grand .Atlas.Support@gmail.com"}
                        />
                        <InfoContactIcon
                            img={phoneIcon}
                            contact={"01247859622"}
                        />
                        <InfoContactIcon
                            img={telephoneIcon}
                            contact={"035987124"}
                        />
                    </ul>
                    <div id="info-social-container">
                        <h3 className="font-playfair-display font-semibold text-[22px] text-[#847D7D]">
                            Follow us on social media
                        </h3>
                        <ul id="info-social" className="flex gap-3.5">
                            <SocialIcon img={facebookIcon} />
                            <SocialIcon img={twitterIcon} />
                            <SocialIcon img={instagramIcon} />
                            <SocialIcon img={tiktokIcon} />
                        </ul>
                    </div>
                    <div
                        id="info-working-hours"
                        className="flex flex-col gap-5"
                    >
                        <h3
                            className=" font-playfair-display font-semibold text-[22px]
                                    text-[#847D7D]"
                        >
                            Working Hours
                        </h3>
                        <ul>
                            <WorkingHour day={"Saturday"} />
                            <WorkingHour day={"Sunday"} />
                            <WorkingHour day={"Monday"} />
                            <WorkingHour day={"Tuesday"} />
                            <WorkingHour day={"Wednesday"} />
                        </ul>
                    </div>
                </div>
                <form
                    id="contact-us-body-form"
                    className="flex-1 flex flex-col gap-3"
                >
                    <h3>Send us a message</h3>
                    <InputField labelText={"Name"} id={"form-name"} />
                    <InputField
                        labelText={"Email"}
                        id={"form-email"}
                        type="email"
                    />
                    <InputField
                        labelText={"Phone"}
                        id={"form-name"}
                        type="number"
                    />

                    <fieldset className="flex flex-col w-full text-xl text-black">
                        <label
                            htmlFor="form-message"
                            className="font-playfair-display"
                        >
                            Message
                        </label>
                        <textarea
                            id="form-message"
                            className="bg-[#F7F7F7] h-50 max-h-50 border border-[#CEC7C7] rounded-lg
                                        outline-0 px-5 py-2 text-xl "
                        ></textarea>
                    </fieldset>

                    <Button children={"Send Message"} />
                </form>
            </main>
        </div>
    );
}

function InfoContactIcon({ img, contact }) {
    return (
        <li
            className=" flex items-center justify-start gap-1
                        text-xl font-medium text-[#8E1616]"
        >
            <img src={img} alt={contact} />
            <p>{contact}</p>
        </li>
    );
}

function SocialIcon({ img, alt = "" }) {
    return (
        <li>
            <img
                src={img}
                alt={alt}
                className="w-10.5 h-10 p-2     rounded-full border border-[#8E1616]"
            />
        </li>
    );
}

function WorkingHour({ day, time = "9:00AM - 5:00PM" }) {
    return (
        <li className="max-w-[288px] flex w-full justify-between text-xl font-medium">
            <h4 className="text-[#8E1616]">{day}:</h4>

            <p className="text-[#847D7D]">{time}</p>
        </li>
    );
}

function InputField({ labelText, id, type = "text" }) {
    return (
        <fieldset className="flex flex-col gap-2 w-full text-xl text-black">
            <label htmlFor={id} className="font-playfair-display">
                {labelText}
            </label>
            <input
                type={type}
                id={id}
                className="bg-[#F7F7F7] h-15 border border-[#CEC7C7] rounded-lg
                            outline-0 px-5 text-xl"
            />
        </fieldset>
    );
}
