import React, { useState, useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollServices from '../../utilities/ScrollServices';
import Animations from '../../utilities/Animations';
import './Resume.css';

export default function Resume(props) {
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
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        )
    };

    const resumeBullets = [
        { label: "Eduction", logoSrc: 'education.svg' },
        { label: 'work history', logoSrc: 'work-history.svg' },
        { label: 'Programming skills', logoSrc: 'programming-skills.svg' }
    ];

    const programmingSkillsDetails = [
        { skill: "Javascript", ratingPercentage: 85 },
        { skill: "React", ratingPercentage: 70 },
        { skill: "Node JS", ratingPercentage: 70 },
        { skill: "Java", ratingPercentage: 60 },
        { skill: "HTML", ratingPercentage: 80 },
        { skill: "CSS", ratingPercentage: 80 },
        { skill: "C#", ratingPercentage: 60 },
    ];

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={"Fatec Mogi das Cruzes"}
                subHeading={"TECHNOLOGIST IN ANALYSIS AND SYSTEM DEVELOPMENT"}
                fromDate={"2019"}
                toDate={"2022"}
            />
            <ResumeHeading
                heading={"Etec Presidente Vargas"}
                subHeading={"High School"}
                fromDate={"2016"}
                toDate={"2018"}
            />
        </div>,
        <div className="resume-screen-container" key="work-experience">
            <ResumeHeading
                heading={"IBM"}
                subHeading={"Application Developer"}
                fromDate={"2021"}
                toDate={"present"}
            />
            <div className='experience-description'>
                <span className='resume-description-text'>
                    Working as a front-end developer for web and mobile applicaitons, fixing bugs and implementing new features
                </span>
            </div>

            <div className='experience-description'>
                <span className='resume-description-text'>
                    - Working on a mobile applocation for the Banco do Brasil bank with React
                </span>
                <br />
                <span className='resume-description-text'>
                    - Working on a web applocation for the Petrobras with Angular and C#
                </span>
                <br />
                <span className='resume-description-text'>
                    - Working on a mobile and web applocation for the Bradesco bank with Angular
                </span>
            </div>
            <ResumeHeading
                heading={"IBM"}
                subHeading={"Cloud Computing Intern"}
                fromDate={"2021"}
                toDate={"present"}
            />
            <div className='experience-description'>
                <span className='resume-description-text'>
                    Learning about cloud, microservices and tech sales
                </span>
            </div>
        </div>,
        <div
            className="resume-screen-container programming-skills-container"
            key="programming-skills"
        >
            {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div
                            style={{ width: skill.ratingPercentage + "%" }}
                            className="active-percentage-bar"
                        ></div>
                    </div>
                </div>
            ))}
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
                    src={require(`../../assets/Resume/${bullet.logoSrc}`)}
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
                className="resume-details-carousal"
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
        <div className='resume-container screen-container' id={props.id || ""}>
            <div className="resume-content">
                <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>

                    <div className="resume-bullet-details">{getResumeScreens()}</div>
                </div>
            </div>
        </div>
    )
}