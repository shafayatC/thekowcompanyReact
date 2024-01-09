import React from 'react';
import ScrolTop from '../../component/ScrolTop/ScrolTop';
import Navbar3D from '../Navbar3D/Navbar3D';
import Contact3D from '../Contact3D/Contact3D';
import Footer3D from '../Footer3D/Footer3D';
import StartPage from './StartPage/StartPage';

const ExteriorVisualization = () => {
    return (
        <div>
            <ScrolTop />
            <Navbar3D />
            <StartPage/>
            <Contact3D />
            <Footer3D />
        </div>
    );
};

export default ExteriorVisualization;