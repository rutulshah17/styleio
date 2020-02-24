import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component'

import { addItem } from '../../redux/cart/cart.actions'

import './collection-item.styles.scss';

//getting item here coz we need it the entire item to pass into redux to add it to cart
const CollectionItem = ({ item, addItem }) => {

	const { name, price, imageUrl } = item;

	return (
		<div className='collection-item'>
			<div className='image' style={{
				backgroundImage: `url(${imageUrl})`
			}} />

			<div className="collection-footer"> 
				<span className="name"> { name } </span>
				<span className="price"> { price } </span>
			</div>
		
			<CustomButton inverted onClick={ () => addItem(item) }>Add to cart</CustomButton>

		</div>
)};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);