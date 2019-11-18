import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';


const HomePage = () => (
	
	// Outer most Component
	<div className="homepage">
		
		{/* component containing all the categories*/}
		<Directory />
	
	</div>
);

export default HomePage;