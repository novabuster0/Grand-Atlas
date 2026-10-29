export default function DeveloperCard({ img, developerImg, badgeText }) {
    return (
        <div className="card relative bg-base-100  shadow-sm not-md:w-[80%] md:w-fit mx-auto">
            <figure className="">
                <img src={img} alt="Shoes" />

                <div className="badge badge-secondary border-0  absolute top-6.25 right-1.75 bg-[#8E1616] text-[16px] font-normal font-Lato">
                    {badgeText}
                </div>
            </figure>
            <div className="card-body">
                <img src={developerImg} alt="Developer" />

                <button className="flex justify-center items-center rounded-lg w-full h-8.75 bg-white border border-[#8E1616] text-[#8E1616] text-[16px] font-Lato font-normal">
                    View Details
                </button>
            </div>
        </div>
    );
}
