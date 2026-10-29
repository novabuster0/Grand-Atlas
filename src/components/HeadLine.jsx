export default function HeadLine({ content }) {
    return (
        <div className="w-fit h-full flex flex-col items-center ">
            <h2 className="font-playfair-display font-semibold text-[32px] ">
                {content}
            </h2>
            <hr className="w-[65%]  border-5 rounded-xs border-[#C34B4B]" />
        </div>
    );
}
