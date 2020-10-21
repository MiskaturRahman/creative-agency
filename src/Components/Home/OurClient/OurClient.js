import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import uber from '../../../images/logos/uber.png';
const OurClient = () => {
    return (
        <section className="row d-flex justify-content-center">

            <div className="column m-5 ">
                <img style={{ height: '50px' }} src={slack} alt="" />
            </div>
            <div className="column m-5 ">
                <img style={{ height: '50px' }} src={google} alt="" />
            </div>
            <div className="column m-5 ">
                <img style={{ height: '50px' }} src={netflix} alt="" />
            </div>
            <div className="column m-5 ">
                <img style={{ height: '50px' }} src={airbnb} alt="" />
            </div>
            <div className="column m-5 ">
                <img style={{ height: '50px' }} src={uber} alt="" />
            </div>
        </section>
    );
};

export default OurClient;