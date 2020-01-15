import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignedin, inverted, ...otherProps}) => (
        <button className=
            {`${inverted ? 'inverted' : '' } 
                ${isGoogleSignedin ? 'google-sign-in' : '' } 
                custom-button` }  
            {...otherProps}
        > {children} 
        </button>
);

export default CustomButton;