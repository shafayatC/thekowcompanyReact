import Integrations from "../Apps&Integration/Apps&Integrations";
import Blog2D from "../Blog2D/Blog2D";
import ChoosePlan from "../ChoosePlan/ChoosePlan";
import Footer2D from "../Footer2D/Footer2D";
import ImageSlider from "../ImageSlider/ImageSlider";
import LetsTalk from "../LetsTalk/LetsTalk";
import Navbar2D from "../Navbar2D/Navbar2D";

import OrderGuide from "../OrderGuide/OrderGuide";

import Record2d from "../Record/Record2d";
import StartPage from "../StartPage/StartPage";


const Container2D = () => {
    return (
        <>
        <Navbar2D/>
        <div className="bg-[#DEE2E2]">
            <StartPage/>
            <Record2d/>
            <ImageSlider/>
            <Integrations/>
            <ChoosePlan/>
            <LetsTalk/>
            <OrderGuide/>
            <Blog2D/>
            <Footer2D/>
        </div>
        </>
    );
};

export default Container2D;