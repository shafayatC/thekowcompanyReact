import React from 'react';
import Footer from '../../component/footer/footer';
import Navbar3D from '../Navbar3D/Navbar3D';
import StartPage from '../StartPage/StartPage';

const Container3D = () => {
    return (
        <div>
            <Navbar3D/>
            <StartPage/>
            <Footer/>
        </div>
    );
};

export default Container3D;