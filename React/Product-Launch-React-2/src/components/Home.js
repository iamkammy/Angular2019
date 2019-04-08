import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {


  render() {


    return (
      <div className="custom-body">
      <div className="banner" id="home">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-6">
                    <div className="header-content wow animated fadeInUp">
                        <h2><span>Present your</span> <br/>Awesome product</h2>
                        <p>Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum necessitatibus praesentium voluptatum deleniti atque corrupti, quos dolores eos.</p>
                        <div className="buy-button">
                           <Link className="btn-buynow" to="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-6 col-sm-6">
                    <div className="slider-image wow animated fadeInRight">
                         <img src={require("../images/header.png")}/>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    <div className="step-section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="step-container">
                        <div className="row">

                            <div className="col-md-4 col-sm-4">
                                <div className="step-single wow fadeInUp">
                                    <div className="icon-box">
                                        <i className="flaticon-login"></i>
                                    </div>
                                    <h3>Create a Account</h3>
                                    <p>The alien mothership is in orbit here. If we can hit that bullseye.</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-4">
                                <div className="step-single wow fadeInUp">
                                    <div className="icon-box">
                                        <i className="flaticon-login"></i>
                                    </div>
                                    <h3>Login in Website</h3>
                                    <p>The alien mothership is in orbit here. If we can hit that bullseye.</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-4">
                                <div className="step-single wow fadeInUp">
                                    <div className="icon-box">
                                        <i className="flaticon-login"></i>
                                    </div>
                                    <h3>Purchase Now</h3>
                                    <p>The alien mothership is in orbit here. If we can hit that bullseye.</p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
export default Home;