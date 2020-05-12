import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import QuestionListCont from './QuestionListCont'
import Nav from './Nav'
import QuestionCont from './QuestionCont'

class App extends Component {
	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}
	// <PrivateRoute path='/' exact component={QuestionListCont}/>
	// <PrivateRoute path='/question/:id'  component={QuestionVote}/>
	// <Route path='/login' component={Login}/>

	render(){
		const matchInput = {
			params : {
				id : 'loxhs1bqm25b708cmbf3g'
			}
		}
		return(
			<Router>
				<Fragment>
					<Nav />
					{this.props.loading === true ?
								null :
								<div>
									<p>Would You Rather</p>
									<Login />
									<QuestionCont match={matchInput}/>
									<QuestionListCont />
								</div>
					}
				</Fragment>
			</Router>
		)
	}
}

function mapStateToProps({users, questions, authedUser}){
	return {
		authedUser,
		loading: Object.keys(users).length === 0 || Object.keys(questions).length === 0
	}
}

export default connect(mapStateToProps)(App)
