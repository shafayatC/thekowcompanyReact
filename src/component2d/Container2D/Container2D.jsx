import Integrations from "../Apps&Integration/Apps&Integrations";
import ChoosePlan from "../ChoosePlan/ChoosePlan";
import ImageSlider from "../ImageSlider/ImageSlider";
import LetsTalk from "../LetsTalk/LetsTalk";
import Navbar2D from "../Navbar2D/Navbar2D";

import OrderGuide from "../OrderGuide/OrderGuide";

import Record2d from "../Record/Record2d";
import StartPage from "../StartPage/StartPage";
import VideoSlider from "../VideoSlider/VideoSlider";


const Container2D = () => {
    return (
        <>
        <Navbar2D/>
        <div className="bg-[#DEE2E2]">
            <StartPage/>
            <Record2d/>
            <ImageSlider/>
            <VideoSlider/>
            <Integrations/>
            <ChoosePlan/>
            <LetsTalk/>
            <OrderGuide/>
        </div>
        </>
    );
};

export default Container2D;