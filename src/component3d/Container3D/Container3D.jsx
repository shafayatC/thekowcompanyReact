import React from 'react';
import Navbar3D from '../Navbar3D/Navbar3D';
import StartPage from '../StartPage/StartPage';
import About3D from '../About3D/About3D';
import Services3D from '../Services3D/Services3D';
import Visualization from '../Visualization/Visualization';
import VisualizationSlider from '../Visualization/VisualizationSlider';
import ProductVisualization from '../Product/ProductVisualization';
import ProductVisualSlider from '../Product/ProductVisualSlider';
import Model3D from '../Model3D/Model3D';
import Footer3D from '../Footer3D/Footer3D';
import Video3D from '../Video3D/Video3D';

const Container3D = () => {
    return (
        <div>
            <Navbar3D />
            <StartPage />
            <About3D />
            <Services3D/>
            <Visualization/>
            <VisualizationSlider/>
            <ProductVisualization/>
            <ProductVisualSlider/>
            <Model3D/>
            <Video3D/>
            <Footer3D/>
        </div>
    );
};

export default Container3D;