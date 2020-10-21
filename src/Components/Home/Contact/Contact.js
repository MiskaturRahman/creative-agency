import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <div className="about col-md-6 pt-5">
                    <h2>Let us handle your project, professionally.</h2>
                    <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem ex reprehenderit</small>
                </div>
                <div className="col-md-6 ml-auto">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email Address *" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name *" />
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type="button" class="btn btn-dark mb-2 pl-3 pr-3">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;