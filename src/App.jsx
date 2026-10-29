import "./App.css";
import { Route, Routes } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut";
import Home from "./pages/home/Home";
import Units from "./pages/units/Units";
import UnitDetailed from "./pages/units/UnitDetailed";
import Zones from "./pages/zones/Zones";
import Contactus from "./pages/contactus/Contactus";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ZoneProjects from "./pages/zones/ZoneProjects";
import ProjectDetails from "./pages/zones/ProjectDetails";

function App() {
    window.onbeforeunload = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div>
            <Routes>
                <Route element={<LayOut />}>
                    <Route path="" element={<Home />} />
                    <Route path="units" element={<Units />} />
                    <Route path="units/:id" element={<UnitDetailed />} />
                    <Route path="zones" element={<Zones />} />
                    <Route path="zones/:id" element={<ZoneProjects />} />
                    <Route path="projects/:id" element={<ProjectDetails />} />
                    <Route path="contactus" element={<Contactus />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
