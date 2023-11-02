import React from 'react';
import PropsTypes from 'prop-types';

const ChildComponent = (props) => {
	return (
		<div>
			<p>Message from Parent: {props.message}</p>
		</div>
	);
};

export default ChildComponent;

ChildComponent.PropsTypes = {
	message: PropsTypes.string,
};

ChildComponent.defaultProps = {
	message: 'Default Message',
};
