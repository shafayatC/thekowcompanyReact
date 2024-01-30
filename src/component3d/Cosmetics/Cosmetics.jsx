import ScrolTop from "../../component/ScrolTop/ScrolTop";
import Footer3D from "../Footer3D/Footer3D";
import Navbar3D from "../Navbar3D/Navbar3D";
import CPage1 from "./CPage1/CPage1";
import StartPage from "./StartPage/StartPage";


const Cosmetics = () => {
    return (
        <div>
            <ScrolTop/>
            <Navbar3D/>
            <StartPage/>
            <CPage1/>
            <Footer3D/>
        </div>
    );
};

export default Cosmetics;