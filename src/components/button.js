import React from 'react';
import styles from 'styled-components';

export default ({ color, name, type, bgColor, id }) => (
	<CustomButton bgColor={bgColor} color={color} type={type} id={id}>
		{name}
	</CustomButton>
);

const CustomButton = styles.button`
   border-radius: 4px;
   font-size: 1rem;
   width: 100%;
   height: 3rem;
   font-style: normal;
   text-transform: capitalize
   color: ${props => props.color};
   background: ${props => props.bgColor};
   font-weight: 500;
   margin-top: 2rem;
   margin-bottom: 2rem;
   border: 0;
   cursor: pointer;

  `;

CustomButton.defaultProps = {
	color: '#fffffa',
};
