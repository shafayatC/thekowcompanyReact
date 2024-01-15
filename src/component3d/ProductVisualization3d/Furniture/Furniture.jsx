import React, { Suspense } from 'react';
import ChairModel from './ChairModel';
import ScrolTop from '../../../component/ScrolTop/ScrolTop';
import Navbar3D from '../../Navbar3D/Navbar3D';
import Footer3D from '../../Footer3D/Footer3D';

const Furniture = () => {
    return (
        <>
            <ScrolTop/>
            <Navbar3D/>
            <Suspense fallback={<p>...Loading</p>}>
                <ChairModel/>
            </Suspense>
            <Footer3D/>
        </>
    );
};

export default Furniture;