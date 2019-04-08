import React, { Component } from 'react';

class Product extends Component {

  render() {
    return (
      <div className="custom-body">
    	<section className="products" id="products">
		<div className="container">

			<div className="row">
				<div className="col-md-12">
					<div className="section-title wow fadeInUp">
						<p>Our Most Popular</p>
						<h2>Awesome Products</h2>
					</div>
				</div>
			</div>

			
			<div className="row">

				<div className="col-md-3 col-sm-6">
					<div className="product-single">
						<div className="product-box">
							<div className="front">
								<img src={require("../images/product-1.png")}/>
								<h3>$240 <del>$349</del></h3>
							</div>
							<div className="back">
								<div className="product-info">
									<h3>Blue Apple Watch</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
									<a href="#" className="btn-ordernow">Order Now</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-3 col-sm-6">
					<div className="product-single">
						<div className="product-box">
							<div className="front">
								<img src={require("../images/product-2.png")}/>
								<h3>$140</h3>
							</div>
							<div className="back">
								<div className="product-info">
									<h3>Blue Apple Watch</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
									<a href="#" className="btn-ordernow">Order Now</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-3 col-sm-6">
					<div className="product-single">
						<div className="product-box">
							<div className="front">
								<img src={require("../images/product-3.png")}/>
								<h3>$240</h3>
							</div>
							<div className="back">
								<div className="product-info">
									<h3>Blue Apple Watch</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
									<a href="#" className="btn-ordernow">Order Now</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-3 col-sm-6">
					<div className="product-single">
						<div className="product-box">
							<div className="front">
								<img src={require("../images/product-4.png")}/>
								<h3>$260</h3>
							</div>
							<div className="back">
								<div className="product-info">
									<h3>Blue Apple Watch</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
									<a href="#" className="btn-ordernow">Order Now</a>
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
export default Product;