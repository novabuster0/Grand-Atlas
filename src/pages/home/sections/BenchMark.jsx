import propertiesImg from "../../../assets/images/HomeImgs/Projects_Managed.svg";
import clientSatisfactionImg from "../../../assets/images/HomeImgs/Client_satisfaction.svg";
import happyClientsImg from "../../../assets/images/HomeImgs/Happy_Clients.svg";
import managedInvestmentsImg from "../../../assets/images/HomeImgs/Managed_Investments.svg";

import BenchmarkCard from "../components/BenchmarkCard";
import HeadLine from "./../../../components/HeadLine";

export default function BenchMark() {
    return (
        <div
            id="benchmark"
            className="home-section px-9.25 flex flex-col gap-14 items-center mt-30.75"
        >
            <HeadLine content="Benchmarks of Success" />

            <div
                id="cards"
                className="w-full flex gap-5.5 not-md:flex-col not-md:m-auto"
            >
                <BenchmarkCard
                    Title={"48"}
                    textContent={"Properties Managed"}
                    cardIcon={propertiesImg}
                />
                <BenchmarkCard
                    Title={"90M"}
                    textContent={"Total Managed Investments"}
                    cardIcon={managedInvestmentsImg}
                />
                <BenchmarkCard
                    Title={"500"}
                    textContent={"Happy Clients"}
                    cardIcon={happyClientsImg}
                />
                <BenchmarkCard
                    Title={"99%"}
                    textContent={"Client Satisfaction"}
                    cardIcon={clientSatisfactionImg}
                />
            </div>
        </div>
    );
}
