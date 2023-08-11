import React, { useState, useCallback } from 'react';
import { TOTAL_SCREENS } from '../utilities/commonUtils'

export default function PortfolioContainer() {
    const [isPT, setIsPT] = useState(false);

    const wrapperSetIsPT = useCallback(val => {
        setIsPT(val);
    }, [setIsPT]);

    const mapAllScreens = () =>{
        return(
            TOTAL_SCREENS.map((screen)=>(
                (screen.component) ? <screen.component isPT={isPT} isPTSetter={wrapperSetIsPT} screenName={screen.screen_name} key={screen.screen_name}
                id={screen.screen_name}/> : <div key={screen.screen_name}></div>
            ))
        )

    }

    return (
        <div className='portfolio-container'>
            {mapAllScreens()}
        </div>
    )
}
