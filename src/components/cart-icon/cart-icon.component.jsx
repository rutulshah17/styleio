import React from 'react';

import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount, mapStateCart }) => 
	{
		const { cartItems, hidden } = mapStateCart;
		console.log(cartItems, hidden);
	
		return (
			<div className='cart-icon' onClick={toggleCartHidden}>
				<ShoppingIcon className='shopping-icon' />
				<span className='item-count'>{ itemCount }</span>
			</div>
)};

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

//state.cart.cartItems
//state.user.currentUser
const mapStatetoProps = (state) => ({
	itemCount: state.cart.cartItems.reduce(
		(accumulatedQuantity, cartItem ) => 
		accumulatedQuantity + cartItem.quantity, 0),
	mapStateCart: state.cart
});

export default connect(mapStatetoProps, mapDispatchToProps)(CartIcon);