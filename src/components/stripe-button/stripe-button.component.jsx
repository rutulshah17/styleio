import React from 'react';

import { connect } from 'react-redux';

import { removeAllItemsFromCart } from '../../redux/cart/cart.actions'

import StripeCheckout  from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price, dispatch }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_pfXkAHGarGd1mvWgFmNf1hQ200aKzt41wC';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
    dispatch(removeAllItemsFromCart());
  };

  return (
    <StripeCheckout
		label='Pay Now'
		name='styleIO Ltd.'
		billingAddress
		shippingAddress
		image='https://svgshare.com/i/CUz.svg'
		description={`Your total is $${price}`}
		amount={priceForStripe}
		panelLabel='Pay Now'
		token={onToken}
		stripeKey={publishableKey}
    />
  );
};

export default connect(null)(StripeCheckoutButton);