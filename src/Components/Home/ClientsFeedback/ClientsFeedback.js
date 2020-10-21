
import React from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';

import Feedback from '../Feedback/Feedback';


const FeedbackData = [
    {
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        client: 'Bria Malon',
        clientImg: customer1,
        position: 'CEO, GOOGLE'
    },
    {
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        client: 'Miriam Barron',
        clientImg: customer2,
        position: 'CEO, GOOGLE'
    },
    {
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        client: 'Nash Patrick',
        clientImg: customer3,
        position: 'CEO, GOOGLE'
    },
]

const ClientsFeedBack = () => {
    return (
        <section className="feedback my-5">
            <div className="container">
                <div className="section-header text-center">

                    <h1>Clients <span style={{ color: '#7AB259' }}>Feedback</span></h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        FeedbackData.map(feedback => <Feedback feedback={feedback} key={feedback.client} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientsFeedBack;