import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import QuestionListCont from './QuestionListCont'

class App extends Component {
	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}
	render(){
		return(
			<div>
				{this.props.loading === true ?
			        		null :
			        		<div>
			        			<p>Would You Rather</p>
		      					<Login />
		      					<p>Logged in user is: {this.props.authedUser}</p>
								<QuestionListCont />
			        		</div>
			    }
			</div>
		)
	}
}

function mapStateToProps({users, authedUser}){
	return {
		authedUser,
		loading: Object.keys(users).length === 0
	}
}

export default connect(mapStateToProps)(App)
