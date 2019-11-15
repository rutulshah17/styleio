import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
	
	// Outer most Component
	<div className="homepage">
		
		{/* component comtaining all the categories*/}
		<div className="directory-menu">

			{/* component with each category */}
			<div className="menu-item">
				<div className="content">
					<h1 className="title"> hats </h1>
					<span className="subtitle"> SHOP NOW </span>
				</div>
			</div>

			<div className="menu-item">
				<div className="content">
					<h1 className="title"> sneakers </h1>
					<span className="subtitle"> SHOP NOW </span>
				</div>
			</div>

			<div className="menu-item">
				<div className="content">
					<h1 className="title"> jackets </h1>
					<span className="subtitle"> SHOP NOW </span>
				</div>
			</div>

			<div className="menu-item">
				<div className="content">
					<h1 className="title"> women </h1>
					<span className="subtitle"> SHOP NOW </span>
				</div>
			</div>

			<div className="menu-item">
				<div className="content">
					<h1 className="title"> men </h1>
					<span className="subtitle"> SHOP NOW </span>
				</div>
			</div>
		
		</div>
	
	</div>
);

export default HomePage;