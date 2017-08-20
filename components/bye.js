import React from 'react';

export class Bye extends React.Component {
	render(){
		return(
			<h2>Bye! {this.props.name}</h2>
		);
	}
}