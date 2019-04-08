import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class About extends Component {

  render() {
    return (
      <div className="custom-body">
       <section className="about-product" id="about">
        <div className="container">
         
            <div className="row">
                <div className="col-md-12">
                    <div className="section-title wow animated fadeInUp">
                        <p>Beauty meets functionality</p>
                        <h2>About Product</h2>
                    </div>
                </div>
            </div>
     
            
            <div className="row">
                <div className="col-md-12">
                    <div className="about-product-single">
                        <div className="row">
                            <div className="col-md-7 col-sm-7">
                                <div className="about-entry">
                                    <h4>Fresh News From The Labs</h4>
                                    <h3>Different preset Signup &amp; Order forms ready to use.</h3>
                                    <p>Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Legendos intellegam id usu, vide oporteat vix eu, id illud principes has.</p>
                                    <Link className="btn-buynow" to="/contact">Contact Us</Link>
                                </div>
                            </div>
                            
                            <div className="col-md-5 col-sm-5">
                                <div className="about-image wow fadeInRight animated">
                                    <img src={require("../images/about-1.png")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="about-product-single">
                        <div className="row">
                            <div className="col-md-7 col-sm-7 pull-right">
                                <div className="about-entry">
                                    <h4>Fresh News From The Labs</h4>
                                    <h3>Different preset Signup &amp; Order forms ready to use.</h3>
                                    <p>Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Legendos intellegam id usu, vide oporteat vix eu, id illud principes has.</p>
                                    <Link className="btn-buynow" to="/contact">Contact Us</Link>
                                </div>
                            </div>
                            
                            <div className="col-md-5 col-sm-5">
                                <div className="about-image wow fadeInLeft animated">
                                    <img src={require("../images/about-2.png")}/>
                                </div>
                            </div>
                        </div>
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
export default About;