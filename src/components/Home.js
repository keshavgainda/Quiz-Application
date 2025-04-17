import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiCubeOutline } from '@mdi/js';


const Home = () => (
    <Fragment>
        <Helmet><title>Quiz Application</title></Helmet>
        <div id='home'>
            <section>
                <div style={{textAlign : 'center'}}>
                    <span className="cube"><Icon path={mdiCubeOutline} size={4} /></span>
                </div>
                <h1>Quiz Application</h1>
                <div className='play-button-container'>
                    <ul>
                        <li><Link  className='play-button' to="/play/instructions">Play</Link></li>
                    </ul>
                </div>
                <div className='auth-container'>
                    <Link to="/login" className='auth-buttons' id='login-button'>Login</Link>
                    <Link to="/register" className='auth-buttons' id='register-button'>Register</Link>
                </div>
            </section>
        </div>
    </Fragment>
)

export default Home;