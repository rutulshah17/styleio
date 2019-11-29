import React from 'react';

import '../../pages/shop/shop-page.component';
import './collection-preview.component.scss';

import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ( {title, items, imageUrl} ) => (
	<div className="collection-preview">
		<div className="image">

		</div>
		<h1 className="title"> { title.toUpperCase() } </h1>
		<div className="preview">
			{ items
				.filter( (item, indx) => ( indx < 4 ) )    
				.map( ({id, ...otherItemProps}) => 
						( <CollectionItem key={id} {...otherItemProps} /> )
					)
			}
		</div>
	</div>
);

export default CollectionPreview;