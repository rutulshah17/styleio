import React from 'react';

import SHOP_DATA from '../shop/shop-data.component';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: SHOP_DATA
		}
	}
	render() {

		return(
			<div className="shop-page">
			{
				this.state.collections.map( ( {id, ...otherCollectionProps} ) => 
					<CollectionPreview key={id} {...otherCollectionProps} />
				)
			}
			</div>
		);
	}
}

export default ShopPage;