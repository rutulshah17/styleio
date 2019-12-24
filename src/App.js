import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop-page.component';

//de-structing auth, since we do not the whole object
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			currentUser: null
		}
	}

	//setting the property to avoid memory leaks, so that we can call this property once user has signed out
	unsubscribeFromAuth = null

	componentDidMount() {
		//assigning the function to the property so that we can empty it again in componentWillUnmount()
		//onAuthStateChanged will continue to send the object, we would have to stop it from giving us
		//here the "userAuth" consist of entire auth object which can be used to make API calls.
		//we are making a potential API call, so making userAuth async
		//get() and onSnapShot() are different although both have to be used on doc/collection reference
		//sequence is like DocumentSnapShot -> DocumentReference(userRef) -> CollectionReference
		this.unsubscribeFromAuth = auth.onAuthStateChanged(userAuth => {
			createUserProfileDocument(userAuth);
		});
	}

	componentWillUnmount() {
		//user have clicked signout, so do not need to listen to onAuthStateChanged anymore
		this.unsubscribeFromAuth();
	}
	
	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser}/>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInAndSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
