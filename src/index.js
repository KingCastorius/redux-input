import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

class Form extends React.Component {
state = {
	fullName: '',
	email: '',
	phoneNumber: '',
	address: ''
}

	setValue(e) {
		if(e.target.name === 'fullName') {
			this.setState({fullName: e.target.value})
		}	else if(e.target.name === 'email') {
			this.setState({email: e.target.value})
		}	else if(e.target.name === 'phoneNumber') {
			this.setState({phoneNumber: e.target.value})
		}	else if(e.target.name === 'address') {
			this.setState({address: e.target.value})
		}
	}

reviewInfo() {
	alert(`Full Name: ${this.state.fullName}, Email: ${this.state.email}, Phone Number: ${this.state.phoneNumber}, Address: ${this.state.address}, `)
}

	render() {
		return(
			<div>
				<input name="fullName" type="text" placeholder="full name" onChange={ this.setValue.bind(this)} />
				<input name="email" type="text" placeholder="email" onChange={ this.setValue.bind(this)} />
				<input name="phoneNumber" type="text" placeholder="phone number" onChange={ this.setValue.bind(this)} />
				<input name="address" type="text" placeholder="address" onChange={ this.setValue.bind(this)} />
				<button onClick={() => this.reviewInfo()}>Review Info</button>
			</div>		
		)
	}
}


render(
	<Form />,
	document.getElementById('root')
)