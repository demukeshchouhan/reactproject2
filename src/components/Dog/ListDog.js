import React from 'react';

export default (props) => {
	let dogs = props.dogsList.map((dog, index) => <li key={index}>{dog.fullname}</li>);
	return (
		<ul>
			{dogs}
		</ul>
	)
}

