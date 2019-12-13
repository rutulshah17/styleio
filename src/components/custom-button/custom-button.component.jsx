import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({children, ...otherProps}) => (
    <div {...otherProps} > 
        <button className='custom-button'> {children} </button>
    </div>
);

export default CustomButton;