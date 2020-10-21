import React from 'react';

const Feedback = (props) => {
    const { description, client, clientImg, position } = props.feedback;
    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3" src={clientImg} alt="" width="60" />
                <div>
                    <h6 className="text-primary">{client}</h6>
                    <h5 className="m-0">{position}</h5>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-secondary mt-4">{description}</p>
            </div>

        </div>
    );
};

export default Feedback;