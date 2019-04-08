import React from 'react';


const Contact = () => {
	return (

		<div className="contact-form custom-body">
			<section className="contactus" id="contact">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<div className="section-title wow fadeInUp">
								<p>Contact Us</p>
								<h2>Keep in touch</h2>
							</div>


							<div className="contact-form">
								<form id="contactForm" action="#" method="post" data-toggle="validator">
									<div className="row">
										<div className="form-group col-md-6 col-sm-6">
											<input type="text" name="name" id="name" className="form-control" placeholder="Enter Your Name" required />
											<div className="help-block with-errors"></div>
										</div>

										<div className="form-group col-md-6 col-sm-6">
											<input type="email" name="email" id="email" className="form-control" placeholder="Your Email Address" required />
											<div className="help-block with-errors"></div>
										</div>

										<div className="form-group col-md-12 col-sm-12">
											<input type="text" name="subject" id="subject" className="form-control" placeholder="Subject" required />
											<div className="help-block with-errors"></div>
										</div>

										<div className="form-group col-md-12 col-sm-12">
											<textarea rows="8" name="message" id="message" className="form-control" placeholder="How can i help you?" required></textarea>
											<div className="help-block with-errors"></div>
										</div>

										<div className="col-md-12 col-sm-12">
											<button type="submit" className="btn-contact" title="Submit Your Message!">Submit</button>
											<div id="msgSubmit" className="h3 text-left hidden"></div>
										</div>
									</div>
								</form>
							</div>

						</div>

						<div className="col-md-4">
							<div className="footer-info">
								<img src="images/logo.png" alt="" />

								<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

								<div className="contactinfo-single">
									<i className="fa fa-phone"></i>
									<h3>Phone Number</h3>
									<p>+91 1204271421-22</p>
								</div>

								<div className="contactinfo-single">
									<i className="fa fa-envelope "></i>
									<h3>Email Support</h3>
									<p><a href="mailto:info@shipgigventures.com">info@shipgigventures.com</a></p>
								</div>

								<div className="contactinfo-single">
									<i className="fa fa-map-marker"></i>
									<h3>Location</h3>
									<p>H-55, 3rd Floor, Sector 63 , Noida<br /> Uttar Pradesh, 201301</p>
								</div>

								<div className="footer-social">
									<a href="https://www.facebook.com/shipgigventures/" target="_blank"><i className="fa fa-facebook"></i></a>
									<a href="#" className="hidden"><i className="fa fa-twitter"></i></a>
									<a href="https://in.linkedin.com/company/webmind-infotech" target="_blank"><i className="fa fa-linkedin"></i></a>
									<a href="#"><i className="fa fa-instagram"></i></a>
									<a href="#"><i className="fa fa-pinterest-p"></i></a>
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
};
export default Contact;