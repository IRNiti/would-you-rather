import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'

class Login extends Component {
	state = {
		authedUser: ''
	}

	handleChange = (event) => {
		const input = event.target.value
		this.setState(() =>({
			authedUser: input
		}))
	}

	// todo: figure out bug with redirecting to home page after login
	login = (event) => {
		event.preventDefault()
		this.props.dispatch(setAuthedUser(this.state.authedUser))
		//this.props.history.push('/')
	}

	// maybe not ideal to set state in componentDidMount since triggers another render
	componentDidMount() {
		const { users } = this.props
		this.setState(() => ({
			authedUser: users[Object.keys(users)[0]].id
		}))
		this.props.dispatch(setAuthedUser(null))
	}

	render(){
		const { users } = this.props
		const { authedUser } = this.state
		return(
			<div className="card center">
				<div className="card-header">
					<h3>Welcome to the Would You Rather App!</h3>
					<p>Please sign in to continue</p>
				</div>
				<div className="card-body">
					<form onSubmit={this.login}>
						<div>
							<select value={authedUser} onChange={this.handleChange}>
								{Object.keys(users).map((userId) =>(
									<option value={userId} key={userId}>{users[userId].name}</option>
								))}
							</select>
						</div>
						<button type='submit' className='btn btn-info'>Sign In</button>
					</form>
				</div>
			</div>
			)
	}
}

function mapStateToProps({users}){
	return {
		users
	}
}

export default withRouter(connect(mapStateToProps)(Login))