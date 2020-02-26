import React from 'react';

import { connect } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkoutpage.styles.scss';

import CheckoutItem  from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ( { cartItems, cartTotal } ) => (
	
	<div className='checkout-page'>
		<div className='checkout-header'>
			
			<div className='header-block'>
				<span> Product </span>
			</div>
		
			<div className='header-block'>
				<span> Description </span>
			</div>

			<div className='header-block'>
				<span> Quantity </span>
			</div>

			<div className='header-block'>
				<span> Price </span>
			</div>

			<div className='header-block'>
				<span> Remove </span>
			</div>
		</div>
		{
			cartItems.map( cartItem => 
				<CheckoutItem key={cartItem.id} cartItem={cartItem} /> 
			)
		}

		<div className='total'>
			<span> TOTAL: $ { cartTotal } </span>
		</div>
		
		<StripeCheckoutButton price={cartTotal} />
	
	</div>
	
);

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
	cartTotal: selectCartTotal(state)
});

export default connect(mapStateToProps)(CheckoutPage);
