import React from 'react';
import ServiceData from '../../ServiceData/ServiceData';
import ServiceDetail from '../ServiceDetail/ServiceDetail';





const OurServices = () => {

    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch(`https://creative-agency-by-sarwar.herokuapp.com/services`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setServices(data);
    //         })
    // }, [])



    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h3 style={{ color: '#2D2D2D' }}>Provide awesome <span style={{ color: '#7AB259' }}>services</span></h3>

            </div>
            <div className="d-flex justify-content-center">

                <div className="w-75 row mt-2 pt-5">
                    {
                        ServiceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)

                    }
                </div>
            </div>
        </section>
    );
};

export default OurServices;