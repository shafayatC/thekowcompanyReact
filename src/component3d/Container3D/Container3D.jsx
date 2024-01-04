import React from 'react';
import Footer from '../../component/footer/footer';
import Navbar3D from '../Navbar3D/Navbar3D';
import StartPage from '../StartPage/StartPage';
import About3D from '../About3D/About3D';
import Services3D from '../Services3D/Services3D';
import Visualization from '../Visualization/Visualization';
import VisualizationSlider from '../Visualization/VisualizationSlider';
import ProductVisualization from '../Product/ProductVisualization';
import ProductVisualSlider from '../Product/ProductVisualSlider';
import Model3D from '../Model3D/Model3D';
import Trends3D from '../Trends3D/Trends3D';
import Contact3D from '../Contact3D/Contact3D';

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
            <Trends3D/>
            <Contact3D/>
            <Footer />
        </div>
    );
};

export default Container3D;