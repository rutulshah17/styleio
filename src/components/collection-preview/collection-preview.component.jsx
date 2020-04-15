import React from 'react';
import { Link } from 'react-router-dom';

import '../../pages/shop/shop-page.component';

import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ( {title, items, ...otherProps} ) => {
	
	console.log(otherProps);

	return (
	<div className="collection-preview">
		<h1 className="title"> { title.toUpperCase() } 
		
			<Link className='explore' to={`/shop/${title.toLowerCase()}`}> Explore All ></Link>
		
		</h1>
		
		<div className="preview">
			{ items
				.filter( (item, indx) => ( indx < 4 ) )    
				.map( (item) => 
						( <CollectionItem key={item.id} item={item} /> )
					)
			}
		</div>
	</div>
)};

export default CollectionPreview;