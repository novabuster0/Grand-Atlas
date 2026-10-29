import Slick from "react-slick";
import MasterpiecesCard from "./../components/MasterpiecesCard";
import masterPieceImg_1 from "/src/assets/images/HomeImgs/1-MasterPieces.png";
import masterPieceImg_2 from "/src/assets/images/HomeImgs/2-MasterPieces.png";
import masterPieceImg_3 from "/src/assets/images/HomeImgs/3-MasterPieces.png";
import HeadLine from "./../../../components/HeadLine";
const Slider = Slick.default ?? Slick;
import { useMediaQuery } from "react-responsive";

export default function Masterpieces() {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const settings = {
        draggable: true,
        swipe: true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1,
        className: "not-md:flex flex-col",
    };
    return (
        <div className="home-section slider-container mx-7 ">
            <Slider {...settings}>
                <MasterpiecesCard
                    Img={masterPieceImg_1}
                    text={"01. Palm Hills Office No.3"}
                />
                <MasterpiecesCard
                    Img={masterPieceImg_2}
                    text={"02. Hacienda Duplex No.4"}
                />
                <MasterpiecesCard
                    Img={masterPieceImg_3}
                    text={"03. Sawary Family Villa "}
                />
                <MasterpiecesCard
                    Img={masterPieceImg_3}
                    text={"03. Sawary Family Villa "}
                />
            </Slider>
        </div>
    );
}
