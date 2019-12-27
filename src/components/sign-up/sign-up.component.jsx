import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
	
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	//using async coz we need to make a potential API request to firebase to store our displayName, email and password
	handleSubmit = async event => {
		//we do not want to render the entire component on submit
		event.preventDefault();

		//we do not want to use this.state.displayName, this.state.email........ everytime
		//So, destructuring

		const {displayName, email, password, confirmPassword} = this.state;

		if(password !== confirmPassword) {
			alert('passwords does not match');
			return;
		}
		try {
			//createUserWithEmailAndPassword is a builtin firebase auth function 
			//which gets us the userAuth object(user in this case)
			
			//we are using the destructured email and password to pass it to the below function
			const {user} = await auth.createUserWithEmailAndPassword(email, password);

			//passing the user auth object along with displayName 
			await createUserProfileDocument(user, {displayName});

			//setting it to intial state, whch will clear out the form
			this.setState( {
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			} );

			console.log(user)

		} catch (error) {
			alert(error);
		}

	}

	handleChange = event => {
		const {name, value} = event.target;
		//creating an array of name: value
		//eg, displName: name....email: email@gmail.com....password: password....
		this.setState( {[name]: value} );
	}
	
	//instead of writing value={this.state.displayName}, value={this.state.email} ........
	//destructuring so this.state can be eliminated
	render() {

		const {displayName, email, password, confirmPassword} = this.state;

		return(
			<div className='sign-up'>

				<h2 className='title'> I do not have an account </h2>
				<span> Sign up with your email and password </span>
				
				<form className='sign-up-form' onSubmit={this.handleSubmit} >
				
					<FormInput
						type='text' 
						name='displayName' 
						value={displayName} 
						onChange={this.handleChange}
						label='Display Name'
						required
					/>

					<FormInput
						type='email' 
						name='email' 
						value={email} 
						onChange={this.handleChange}
						label='Email'
						required
					/>

					<FormInput
						type='password' 
						name='password' 
						value={password} 
						onChange={this.handleChange}
						label='Password'
						required
					/>

					<FormInput
						type='password' 
						name='confirmPassword' 
						value={confirmPassword} 
						onChange={this.handleChange}
						label='Confirm Password'
						required
					/>

					<CustomButton type='submit'> Sign Up </CustomButton>

				</form>
			</div>
		)
	}
}

export default SignUp;