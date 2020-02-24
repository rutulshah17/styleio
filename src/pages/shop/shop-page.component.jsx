import React from 'react';

import { connect } from 'react-redux';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectShopCollection } from '../../redux/shop/shop.selectors'

const ShopPage = ( {collections} ) => (
	<div className="shop-page">
		{
			collections.map( ( {id, ...otherCollectionProps} ) => 
				<CollectionPreview key={id} {...otherCollectionProps} />
			)
		}
	</div>
);

const mapStateToProps = state => ({
	collections: selectShopCollection(state)
});

export default connect(mapStateToProps)(ShopPage);