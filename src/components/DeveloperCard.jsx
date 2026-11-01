import { Link } from "react-router-dom";
/*
    developerInfo > {logo:Img} || {logo:Img, projectName:"text", developerName:"text"}
*/

export default function DeveloperCard({
    img,
    developerInfo ,
    badgeText,
    developerId,
}) {
    console.log(Object.keys(developerInfo).length);
    
    return (
        <div className="card relative bg-base-100 max-w-110.5 max-h-106.5 shadow-sm not-md:w-[80%] md:w-fit mx-auto">
            <figure className="">
                <img src={img} alt="Shoes" />

                <div className="badge badge-secondary border-0  absolute top-6.25 right-1.75 bg-[#8E1616] text-[16px] font-normal font-Lato rounded-sm px-4 py-1">
                    {badgeText}
                </div>
            </figure>
            <div className="card-body">
                <div id="developer-info" className="">
                    {Object.keys(developerInfo).length != 1 ? (
                        <div>
                            <img
                                src={developerInfo["developerImg"]}
                                alt="Developer"
                                className="max-w-49 w-full"
                            />
                            <h3 id="project-name">
                                {developerInfo["projectName"]}
                            </h3>
                            <p id="developer-name">
                                {developerInfo["developerName"]}
                            </p>
                        </div>
                    ) : (
                            <img
                                src={developerInfo["developerImg"]}
                                alt="Developer"
                                className="max-w-49 w-full"
                            />
                    )}
                </div>
                <Link
                    to={`/developers/${developerId}`}
                    className="w-full h-8.75 flex justify-center items-center rounded-lg bg-white 
                                border border-[#8E1616] 
                                text-[#8E1616] text-[16px] font-Lato font-normal
                                hover:border-white hover:text-white hover:bg-[#8E1616] hover:cursor-pointer transition-all "
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}
