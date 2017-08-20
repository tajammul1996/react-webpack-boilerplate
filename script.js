import React from 'react';
import ReactDOM from 'react-dom';
import {Bye} from './components/bye';
import {Hello} from './components/hello';

ReactDOM.render(
	<div>
		<Bye name="Tajammul" />
		<Bye name="Pasha" />
		<Hello name="Tajammul" />
		<Hello name="Pasha" />
	</div>,
	document.getElementById('firstapp')
);