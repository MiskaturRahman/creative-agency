import React from 'react';
import ClientsFeedBack from '../ClientsFeedback/ClientsFeedback';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import OurClient from '../OurClient/OurClient';
import OurServices from '../OurServices/OurServices';
import OurWork from '../OurWork/OurWork';

const Home = () => {
    document.title = 'Creative Agency || Home';
    return (
        <div>
            <Header />
            <OurClient />
            <OurServices />
            <OurWork />
            <ClientsFeedBack />
            <Contact />
        </div>
    );
};

export default Home;