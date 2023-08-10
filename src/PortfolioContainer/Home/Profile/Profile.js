import React from 'react';
import Typical from 'react-typical';
import './Profile.css';
import ScrollServices from "../../../utilities/ScrollServices";

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://github.com/LucianaMiki'>
                                <i className='fa fa-github'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/lucianamikiochiai/'>
                                <i className='fa fa-linkedin'></i>
                            </a>
                        </div>
                    </div>

                    <div className='profile-deatils-name'>
                        <span className='primary-text'>
                            {''}
                            Hello, I'm <span className='highlited-text'>Luciana</span>
                        </span>
                    </div>

                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {''}
                            <h1>
                                {''}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Dev",
                                        1000,
                                        "Full Stack Developer",
                                        1000,
                                        "React Dev",
                                        1000,
                                        "Angular Dev",
                                        1000
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Building applicationd with front and back end operations.
                            </span>
                        </span>
                    </div>

                    <div className="profile-options">
                        <a href="Curriculum EN.pdf" download='Curriculum EN.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>

                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    )
}