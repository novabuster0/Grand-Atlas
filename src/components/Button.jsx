import { twMerge } from "tailwind-merge";

export default function Button({ classes, children, onclick }) {
    return (
        <button
            onClick={onclick}
            className={twMerge(
                "flex justify-center items-center rounded-lg w-64.5 h-11.75 text-[20px] font-bold text-white bg-linear-to-r from-[#8E1616] to-[#C34B4B] hover:cursor-pointer hover:text-[#8E1616]  hover:from-white hover:to-white border border-transparent hover:border-[#8E1616] hover:scale-105 transition-all duration-300",
                classes,
            )}
        >
            {children}
        </button>
    );
}
