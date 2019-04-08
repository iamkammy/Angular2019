import React, { Component } from 'react';
class Features extends Component {

    render() {
        return (
            <div className="custom-body">
                <section className="features" id="features">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title wow animated fadeInUp">
                                    <p>Explore the Awesome</p>
                                    <h2>Product Features</h2>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-4">

                                <div className="feature-single feature-right animated wow fadeInLeft">
                                    <div className="icon-box">
                                        <i class="fa fa-microchip" aria-hidden="true"></i>
                                    </div>

                                    <h3>Dual Processor</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                </div>

                                <div className="feature-single feature-right animated wow fadeInLeft">
                                    <div className="icon-box">
                                        <i class="fa fa-star-half-o" aria-hidden="true"></i>
                                    </div>

                                    <h3>Gold aluminum</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                </div>

                                <div className="feature-single feature-right animated wow fadeInLeft">
                                    <div className="icon-box">
                                        <i class="fa fa-search custom-i-align" aria-hidden="true"></i>
                                    </div>

                                    <h3>Ion-X glass</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                </div>

                                <div className="feature-single feature-right animated wow fadeInLeft">
                                    <div className="icon-box">
                                        <i class="fa fa-heartbeat" aria-hidden="true"></i>
                                    </div>

                                    <h3>Heart rate sensor</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                </div>

                            </div>

                            <div className="col-md-4">
                                <div className="feature-image wow animated fadeInUp">
                                    <img src={require("../images/feature.png")} />
                                </div>
                            </div>

                            <div className="col-md-4">

                                <div className="feature-single feature-left animated wow fadeInRight" >
                                    <div className="icon-box">
                                        <i class="fa fa-compress" aria-hidden="true"></i>
                                    </div>

                                    <h3>Force Touch</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                </div>

                                <div className="feature-single feature-left animated wow fadeInRight" >
                                    <div className="icon-box">
                                        <i class="fa fa-eye custom-i-align" aria-hidden="true"></i>
                                    </div>

                                    <h3>Retina display</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                </div>

                                <div className="feature-single feature-left animated wow fadeInRight" >
                                    <div className="icon-box">
                                        <i class="fa fa-volume-up custom-i-align" aria-hidden="true"></i>
                                    </div>

                                    <h3>Fire Speaker</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                </div>

                                <div className="feature-single feature-left animated wow fadeInRight" >
                                    <div className="icon-box">
                                        <i class="fa fa-wifi" aria-hidden="true"></i>
                                    </div>

                                    <h3>Bluetooth &amp; Wi-Fi</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-facts">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title wow animated fadeInUp">
                                    <p>User Experience</p>
                                    <h2>The Facts about</h2>
                                </div>
                            </div>
                        </div>


                        <div className="row">

                            <div className="col-md-3 col-sm-6">
                                <div className="facts-single">
                                    <h3 className="counter">2485</h3>
                                    <p>People Buy</p>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6">
                                <div className="facts-single">
                                    <h3 className="counter">458</h3>
                                    <p>Users</p>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6">
                                <div className="facts-single">
                                    <h3 className="counter">885</h3>
                                    <p>Comments</p>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6">
                                <div className="facts-single">
                                    <h3 className="counter">561</h3>
                                    <p>Premium Users</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="jumptotop" id="back-to-top">
                                    <a href="#"><i className="fa fa-chevron-up"></i></a>
                                </div>
                                <div className="footer-siteinfo">
                                    <p>Copyright &copy; 2018 Shipgig Ventures PVT LTD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
export default Features;