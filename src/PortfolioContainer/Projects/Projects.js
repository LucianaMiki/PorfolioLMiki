import React, { useState, useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollServices from '../../utilities/ScrollServices';
import Animations from '../../utilities/Animations';
import './Projects.css';

export default function Projects(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id);
    }

    const fadeInSubscription = ScrollServices.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
        return (
            <div className="projects-heading">
                <div className='projects-photo'>
                    {props.projectPhoto}
                </div>
                <div className="projects-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ""}</span>
                </div>
                <div className="projects-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
                <div className="projects-repository">
                    <span>Repository: <a href={props.repository ? props.repository : ""}>{props.repository ? props.repository : ""}</a></span>
                </div>
                <div className="projects-heading-link">
                    <span>Link: <a href={props.link ? props.link : ""}>{props.link ? props.link : ""}</a></span>
                </div>
            </div>
        )
    };

    const resumeBullets = [
        { label: "Login Project" }
    ];

    const resumeDetails = [
        <div className="projects-screen-container" key="loginProject">
            <ResumeHeading
                projectPhoto={<img className="projects-login-photo" src={require ('../../assets/Projects/telaLogin.png')} alt='problem loading file'/>}
                heading={"Login Project"}
                repository={"https://github.com/LucianaMiki/login-frontend"}
                link={'https://loginlucianamiki.netlify.app/'}
                description={'A login and register screen'}
            />
        </div>
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;

        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };

        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={
                    index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}
            >
                <img
                    className="bullet-logo"
                    src={require(`../../assets/Projects/dot.png`)}
                    alt="B"
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
    };

    const getResumeScreens = () => {
        return (
            <div
                style={carousalOffsetStyle.style}
                className="projects-details-carousal"
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };

    useEffect(() => {
        return () => {
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);

    return (
        <div className='projects-container screen-container' id={props.id || ""}>
            <div className="projects-content">
                <ScreenHeading title={"Projects"} subHeading={"My projects"} />
                <div className="projects-card">
                    <div className="projects-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>

                    <div className="projects-bullet-details">{getResumeScreens()}</div>
                </div>
            </div>
        </div>
    )
}