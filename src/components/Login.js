import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
	// todo: set default state that is not empty
	state = {
		authedUser: ''
	}

	handleChange = (event) => {
		const input = event.target.value
		console.log(input)
		this.setState(() =>({
			authedUser: input
		}))
	}

	login = (event) => {
		event.preventDefault()
		this.props.dispatch(setAuthedUser(this.state.authedUser))
	}

	// todo: implement logout and maybe automatically log out users when componentDidMount
	// logout can be just setting authedUser = ''

	render(){
		console.log(this.props)
		return(
			<form onSubmit={this.login}>
				<select value={this.state.authedUser} onChange={this.handleChange}>
					{Object.keys(this.props.users).map((userId) =>(
						<option value={userId} key={userId}>{this.props.users[userId].name}</option>
						))}
				</select>
				<button type='submit'>Submit</button>
			</form>
			)
	}
}

function mapStateToProps({users}){
	return {
		users
	}
}

export default connect(mapStateToProps)(Login)