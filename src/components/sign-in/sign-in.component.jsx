import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = event => {
		event.preventDefault();
		this.setState( { email: '', password: '' } );
	};

	handleChange = event => {
		const {name, value} = event.target;
		this.setState( { [name]: value } );

	};

	render() {

		//* passing label, name, type, value, handleChange and required as props to form-input component 
		//* which will be retrieved as ...otherProps in form-input component
		//* since we have to define each property for form-input (such as label, type, value .....)
		//* we cannot use ...otherProps in this component, but can be retrieved as ...otherProps on the other end

		return(
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span> sign in with your email and password </span>
			
				<form onSubmit={this.handleSubmit}>

					<FormInput 
						label='Email' 
						name='email' 
						type='email' 
						value={this.state.email} 
						handleChange={this.handleChange}
						required
					/>

					<FormInput 
						label='Password' 
						name='password' 
						type='password' 
						value={this.state.password} 
						onChange={this.handleChange} 
						required
					/>

					<CustomButton type='submit' value='Submit Form'> Sign In </CustomButton>
					<CustomButton type='submit' value='Submit Form'> Sign In with Google </CustomButton>
				
				</form>
			
			</div>
		)
	}
}

export default SignIn;