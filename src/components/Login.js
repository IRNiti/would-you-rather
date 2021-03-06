import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

// Connected component setting the authenticated user in the Redux store
class Login extends Component {
	// currentUser: keep track of user selection from form
	// shouldRedirect: store state to redirect after login is complete
	state = {
		currentUser: '',
		shouldRedirect: false
	}

	handleChange = (event) => {
		const input = event.target.value
		this.setState(() =>({
			currentUser: input
		}))
	}

	login = (event) => {
		event.preventDefault()
		this.props.dispatch(setAuthedUser(this.state.currentUser))
		this.setState(() => ({
			shouldRedirect: true
		}))
	}

	componentDidMount() {
		const { users } = this.props
		this.setState(() => ({
			currentUser: users[Object.keys(users)[0]].id
		}))
		this.props.dispatch(setAuthedUser(null))
	}

	render(){

		if(this.state.shouldRedirect === true){
			if(this.props.location.state){
				return <Redirect to={this.props.location.state.redirectTo} />
			} else {
				return <Redirect to='/' />
			}
		}

		const { users } = this.props
		const { currentUser } = this.state

		return(
			<div className="card card-single center">
				<div className="card-header">
					<h3>Welcome to the Would You Rather App!</h3>
					<p>Please sign in to continue</p>
				</div>
				<div className="card-body">
					<form onSubmit={this.login}>
						<div>
							<select value={currentUser} onChange={this.handleChange}>
								{Object.keys(users).map((userId) =>(
									<option value={userId} key={userId}>{users[userId].name}</option>
								))}
							</select>
						</div>
						<button type='submit' className='btn btn-primary'>Sign In</button>
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

export default connect(mapStateToProps)(Login)