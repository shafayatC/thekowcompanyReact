import Integrations from "../Apps&Integration/Apps&Integrations";
import ChoosePlan from "../ChoosePlan/ChoosePlan";
import LetsTalk from "../LetsTalk/LetsTalk";
import Navbar2D from "../Navbar2D/Navbar2D";
import Record2d from "../Record/Record2d";
import StartPage from "../StartPage/StartPage";


const Container2D = () => {
    return (
        <>
        <Navbar2D/>
        <div className="bg-[#DEE2E2]">
            <StartPage/>
            <Record2d/>
            <Integrations/>
            <ChoosePlan/>
            <LetsTalk/>
        </div>
        </>
    );
};

export default Container2D;