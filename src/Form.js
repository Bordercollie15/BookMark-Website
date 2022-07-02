import React from 'react';

export default props => (
	<input type="text" name="name" onChange={props.updateNameHandler} />
);
