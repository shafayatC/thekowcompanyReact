import Integrations from "../Apps&Integration/Apps&Integrations";
import ChoosePlan from "../ChoosePlan/ChoosePlan";
import LetsTalk from "../LetsTalk/LetsTalk";
import Navbar2D from "../Navbar2D/Navbar2D";
import OrderGuide from "../OrderGuide/OrderGuide";
import StartPage from "../StartPage/StartPage";


const Container2D = () => {
    return (
        <>
        <Navbar2D/>
        <div className="bg-[#DEE2E2]">
            <StartPage/>
            <Integrations/>
            <ChoosePlan/>
            <LetsTalk/>
            <OrderGuide/>
        </div>
        </>
    );
};

export default Container2D;