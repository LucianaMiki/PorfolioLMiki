import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollServices from '../../utilities/ScrollServices';
import Animations from '../../utilities/Animations';
import './AboutMe.css';

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollServices.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = {
        description: "My name is Luciana Miki Ochiai. I'm a fullstack developer based in Mogi das Cruzes, São Paulo, Brazil. Graduated in System Analysis and Development by Fatec Mogi das Cruzes, I've worked to IBM as a application developer, building web and mobile applicaitons. I'm passionate about user experience, agile methodologies and development.",
        highlights: {
            bullets: [
                "Fullsctack web development",
                "React and React Native",
                "Angular and AngularJS",
                "Interactive and responsive Front End development",
                "Building REST API",
                "Managing database"
            ],
            heading: "Here are a few highlights:"
        }
    }

    const SCREEN_CONSTANTS_PT = {
        description: "Meu nome é Luciana Miki Ochiai. Sou uma desenvolvedora fullstack que mora em Mogi das Cruzes, São Paulo, Brasil. Graduada em Análise e Desenvolvimento de Sistemas pela Fatec Mogi das Cruzes, trabalho para a IBM como desenvolvedora de aplicações, construindo aplicações web e mobile. Sou apaixonada por desenvolvimento, experiência do usuário e metodologia ágil.",
        highlights: {
            bullets: [
                "Desenvolvimento Fullstack",
                "React e React Native",
                "Angular e AngularJS",
                "Desenvolvimento Front-end responsivo e interativo",
                "Construir REST API",
                "Gerenciar banco de dados"
            ],
            heading: "Aqui estão alguns pontos principais:"
        }
    }

    const renderHighlights = () => {
        return (
            props.isPT ?
                SCREEN_CONSTANTS_PT.highlights.bullets.map((value, i) => (
                    <div className='highlight' key={i}>
                        <div className='highlight-blob'></div>
                        <span>{value}</span>
                    </div>
                ))
                :
                SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                    <div className='highlight' key={i}>
                        <div className='highlight-blob'></div>
                        <span>{value}</span>
                    </div>
                ))
        )
    }

    return (
        <div className='about-me-container screen-container' id={props.id || ""}>
            <div className='about-me-parent'>
            {props.isPT ? <ScreenHeading title={"Sobre Mim"} subHeading={"Porque me escolher"} /> : <ScreenHeading title={"About Me"} subHeading={"Why choose me?"} />}
                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        {props.isPT ? <span className='about-me-description'>{SCREEN_CONSTANTS_PT.description}</span> : <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>}
                        <div className='about-me-highlights'>
                            <div className='highlight-heading'>
                                {props.isPT ? <span>{SCREEN_CONSTANTS_PT.highlights.heading}</span> : <span>{SCREEN_CONSTANTS.highlights.heading}</span>}
                            </div>
                            {renderHighlights()}
                        </div>
                        <div className='about-me-options'>
                            <a href="Curriculum EN.pdf" download='Curriculum EN.pdf'>
                                {props.isPT ? <button className='btn highlighted-btn'>Currículo</button> : <button className='btn highlighted-btn'>Get Resume</button>}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}