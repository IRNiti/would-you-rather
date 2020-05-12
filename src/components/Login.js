import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
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

	componentDidMount() {
		const { users } = this.props
		this.setState(() => ({
			authedUser: users[Object.keys(users)[0]].id
		}))
		this.props.dispatch(setAuthedUser(''))
	}

	render(){
		const { users } = this.props
		const { authedUser } = this.state
		return(
			<form onSubmit={this.login}>
				<select value={authedUser} onChange={this.handleChange}>
					{Object.keys(users).map((userId) =>(
						<option value={userId} key={userId}>{users[userId].name}</option>
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