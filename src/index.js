import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Log from './Login1'
import Hello from './Hello'
import Form from './Form'
//import { Component } from 'react';
class HelloWorld extends React.Component {
    render() {
        return <div>Hello World</div>;
    }
}



class Greeting extends React.Component {
	state = {
		name: '',
	};

	_updateName = e => {
		const value = e.target.value;
		this.setState({ name: value });
	};

	render() {
		return (
			<div>
				<Hello name={this.state.name} />
				<Form updateNameHandler={this._updateName} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
