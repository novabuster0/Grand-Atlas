import React from "react";

export default function MasterpiecesCard({ Img, text }) {
    return (
        <div className="m-2.5 flex flex-col gap-6.25">
            <img
                src={Img}
                className="
    relative z-0
    h-74.5 w-full object-cover rounded-2xl
    shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
    transition-transform duration-300
    hover:z-20 hover:scale-110
  "
            />

            <p className="font-playfair-display font-semibold text-2xl">
                {text}
            </p>
        </div>
    );
}
