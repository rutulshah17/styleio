import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop-page.component';

//de-structing auth, since we do not the whole object
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions'



class App extends React.Component {
	
	anotherObjectFromApp = {
		demoText: 'Demo Text from Another Object',
	}

	//setting the property to avoid memory leaks, so that we can call this property once user has signed out
	unsubscribeFromAuth = null

	componentDidMount() {

		const { setCurrentUserProp } = this.props;

		//assigning the function to the property so that we can empty it again in componentWillUnmount()
		//onAuthStateChanged will continue to send the object, we would have to stop it from giving us
		//here the "userAuth" consist of entire auth object which can be used to make API calls.
		//we are making a potential API call, so making userAuth async
		//get() and onSnapShot() are different although both have to be used on doc/collection reference
		//sequence is like DocumentSnapShot -> DocumentReference(userRef) -> CollectionReference
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			
			if(userAuth) {

				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot( snapshot => 
					setCurrentUserProp({
						id: snapshot.id,
						...snapshot.data()
					}, () => { console.log(snapshot.data()) })
				)

			} else {
				setCurrentUserProp(userAuth, () => {console.log(userAuth)})
			}
			
		});
	}

	componentWillUnmount() {
		//user have clicked signout, so do not need to listen to onAuthStateChanged anymore
		this.unsubscribeFromAuth();
	}
	

	//passing state.currentuser into header so that Header component can access it
	//as we want to see the value of currentUser
	//removing the ' currentUser={this.state.currentUser} ' from header component
	//As Header component is a HOC and it wil get its value from root-reducer
	render() {
		return (
			<div>
				<Header/>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInAndSignUpPage} />
				</Switch>
			</div>
		);
	}
}

//setCurrentUser(user) is just a function call which user-action will receive
//setting payload to user
//setCurrentUserProp is just a var which stores the value of 'user => dispatch(setCurrentUser(user))'
//so that in future it can be referenced as setCurrentUserProp(user)
//So here instead of this.setState() for setting the state, we are using setCurrentUserProp 

//since we are getting user data in snapshot object in setCurrentUserProp,
//'setCurrentUserProp: (user)' means setCurrentUserProp which was defined above will pass its properties (snapshot.data())
//to (user) which would pass along as argument to user-action which would set its state to 'SET_CURRENT_USER' 
//and pass in the user argument to payload which would go into user-reducer to trigger the particular action 


const mapDispatchToProps = dispatch => ({
	setCurrentUserProp: (user) => dispatch(setCurrentUser(user))
})


//here the first value is null coz we do not wwant anything from root-reducer here
//i.e. we do want to define mapStateToProps here, since we are setting the value
//so, we are going from component -> root-reducer hence, we will use mapDispatchToProps
export default connect(null, mapDispatchToProps)(App);
