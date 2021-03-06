import React from 'react';

function FirstSlide(props) {
	return (
		<div>
			<div
				className="hero-wrap"
				style={{ backgroundImage: `url(${props.background})` }}			
			>
				<div className="overlay" />
				<div className="container">
					<div
						className="row no-gutters slider-text align-items-center justify-content-center"
						data-scrollax-parent="true"
					>
						<div
							className="col-md-7 ftco-animate text-center"
							data-scrollax=" properties: { translateY: '70%' }"
						>
							<p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
								<span className="mr-2">
									<a href="index.html">Home</a>
								</span>{' '}
								{/* <span>About</span> */}
								<span>{props.span}</span>
							</p>
							<h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
								{/* About Us */}
								{props.h1}
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FirstSlide;
