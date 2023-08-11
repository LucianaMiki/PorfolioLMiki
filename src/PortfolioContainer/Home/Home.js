import React, { useState, useCallback, useEffect } from 'react';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Home.css';

export default function Home({id, isPTSetter}) {
    const [isPT, setIsPT] = useState(false);

    const wrapperSetIsPT = useCallback(val => {
        setIsPT(val);
    }, [setIsPT]);

    useEffect(() => {
        isPTSetter(isPT);
    }, [isPTSetter, isPT]);

    return (
        <div className='home-container' id={id || ""}>
            <Header isPT={isPT} isPTSetter={wrapperSetIsPT} />
            <Profile isPT={isPT}/>
            <Footer />
        </div>
    )
}