import React, { Component } from 'react';

class Services extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className="service-page">
         <section className="newsletter-feature">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-title wow fadeInUp">
						<p>Newsletter</p>
						<h2>Join with Us</h2>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-md-12">
					<div className="newsletter-form">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
						
						<form action="#" className="form-inline">
							<div className="form-group">
								<input type="email" name="email" id="email" className="form-control" placeholder="Your Email Address" required />
								<button className="btn-subscribe" type="submit">Subscribe</button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-md-2 col-sm-4">
					<div className="small-feature-single wow fadeInUp" >
						<div className="icon-box">
							<i className="flaticon-package-1"></i>
						</div>
						<p>Unlimited Installs and Updates</p>
					</div>
				</div>
				
				<div className="col-md-2 col-sm-4">
					<div className="small-feature-single wow fadeInUp" >
						<div className="icon-box">
							<i className="flaticon-cpu"></i>
						</div>
						<p>With its dual-core processor</p>
					</div>
				</div>
				
				<div className="col-md-2 col-sm-4">
					<div className="small-feature-single wow fadeInUp">
						<div className="icon-box">
							<i className="flaticon-users"></i>
						</div>
						<p>Unlimited Team Members and Projects</p>
					</div>
				</div>
				
				<div className="col-md-2 col-sm-4">
					<div className="small-feature-single wow fadeInUp">
						<div className="icon-box">
							<i className="flaticon-bluetooth"></i>
						</div>
						<p>Bluetooth & Wi-Fi Messenger</p>
					</div>
				</div>
				
				<div className="col-md-2 col-sm-4">
					<div className="small-feature-single wow fadeInUp">
						<div className="icon-box">
							<i className="flaticon-support"></i>
						</div>
						<p>Premium Support and Help Desk</p>
					</div>
				</div>
				
				<div className="col-md-2 col-sm-4">
					<div className="small-feature-single wow fadeInUp">
						<div className="icon-box">
							<i className="flaticon-video-camera"></i>
						</div>
						<p>Hight Quality Camera support</p>
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
export default Services;