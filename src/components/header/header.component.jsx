import React from 'react';
import { Link } from 'react-router-dom';

//Higher Order Component (HOC)
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import './header.styles.scss';

const Header = ( {currentUser, hidden} ) => (
  
	<div className="header">
	
		<Link className="logo-container" to='/'>  
			<Logo className="logo" />
		</Link>
	   
		<div className="options">
			
			<Link className="option" to='/shop' > SHOP </Link>
			<Link className="option" to='/shop' > CONTACT </Link>
			{ currentUser
				
				? ( <div className='option' onClick={ () => auth.signOut() } > SIGN OUT </div> )
				: ( <Link className="option" to='/signin'> SIGN IN </Link> )
			}

			<CartIcon />
		</div>
		{
			hidden ? null : <CartDropdown />
			
		}

	</div>
); 

//using root-reducer here, 
//under state, we have user and then currentUser in userReducer which points to action.payload (value that we want) 
//as a result, we have state.user.currentUser
//mapStateToProps (which is STORE) is basically used to get the state from its parent component
//in this case, we get it from user-reducer and will be triggered if value of reducer changes
const mapStateToProps = ({user, cart}) => ({
	currentUser: user.currentUser,
	hidden: cart.hidden
})

export default connect(mapStateToProps)(Header);