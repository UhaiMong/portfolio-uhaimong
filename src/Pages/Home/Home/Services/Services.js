import React from 'react';

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="max-width">
                <h2 className="title">My Services</h2>
                <div className="serv-content">
                    <div className="card">
                        <div className="box">
                            <i className="uil uil-brackets-curly"></i>
                            <div className="text">Web Design</div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="box">
                            <i className="uil uil-google"></i>
                            <div className="text">SEO</div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="box">
                            <i className="uil uil-mobile-android"></i>
                            <div className="text">Mobile application</div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;