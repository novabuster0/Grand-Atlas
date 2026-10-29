export default function BenchmarkCard({ cardIcon, Title, textContent }) {
    return (
        <div
            className="flex flex-col gap-2 py-3 flex-1 items-center border border-[#CEC7C7] rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.25)]
                    hover:scale-110 transition-all duration-300
                    not-md:w-full "
        >
            <img src={cardIcon} className="w-fit" alt="" />
            <h2 className="font-bold text-2xl font-Lato">{Title}</h2>
            <p className="font-normal text-[16px] font-Lato text-[#554E4E]">
                {textContent}
            </p>
        </div>
    );
}
