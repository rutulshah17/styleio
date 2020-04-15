import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectUserDisplayName } from '../../redux/user/user.selector'

import './cart-dropdown.styles.scss';

//under onclick, we have another set of brackets after the callback function since we want to 
//render 2 things for 1 click
const CartDropdown = ({ cartItems, history, toggleCartHidden, displayName }) => (
	<div className='cart-dropdown'>

		<h2> Hello {displayName} </h2>

		<div className='cart-items'>
			{ 
				cartItems.length ?
				cartItems.map( cartItem => 
			  		( <CartItem key={cartItem.id} item={cartItem} /> ) 
				)
				: ( <span className='empty-message'> Your cart is empty </span> )
				
			}
		</div>
		<CustomButton onClick={ () => 
			{ 
				history.push('/checkout') 
				toggleCartHidden()
			} 
		} 
		> Go TO CHECKOUT </CustomButton>
	</div>
);

const mapStateToProps = state => ({
	cartItems: selectCartItems(state),
	displayName: selectUserDisplayName(state)
});

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()) 
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));