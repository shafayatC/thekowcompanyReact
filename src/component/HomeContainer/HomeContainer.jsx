

import { Route } from 'react-router-dom'
import Navbar from '../navber/navbar'
import ProductVideo from '../ProductVideo/ProductVideo'
import WelcomePage from '../welcomePage/welcomePage'
import DivSliderParrent from '../slider/divSliderParrent'
import Record from '../record/record'
import Retouched from '../Retouched/Retouched'
import Integration from '../Integration/Integration'
import TheSquad from '../TheSquad/TheSquad'
import BluePrint from '../BluePrint/BluePrint'
import IndustryTrends from '../IndustryTrends/IndustryTrends'
import GetUpdate from '../GetUpdate/GetUpdate'
import Footer from '../footer/footer'
import Slider3D from '../slider/Slider3D'
import TheSquadSlide from '../TheSquad/TheSquadSlide'

function HomeContainer() {
    return (
        <>
            <Navbar />
            <div className="bg-[#DEE2E2] bgImage pb-3 flex flex-col relative">
                {/* <img src='/circle-bg.svg' /> */}
                <ProductVideo />
                <WelcomePage />
                <DivSliderParrent />
                <Slider3D/>
                <Record />
                <Retouched />
                <Integration />
                <TheSquadSlide/>
                {/* <TheSquad /> */}
                <BluePrint />
                <IndustryTrends />
                <GetUpdate />
            </div>
            <Footer />

        </>
    )
}

export default HomeContainer
