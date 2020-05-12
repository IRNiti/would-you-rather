import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import QuestionListCont from './QuestionListCont'
import Nav from './Nav'

class App extends Component {
	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}
	render(){
		return(
			<Router>
				<Fragment>
					<Nav />
					{this.props.loading === true ?
								null :
								<div>
									<p>Would You Rather</p>
									<Route path='/' exact component={QuestionListCont}/>
									<Route path='/login' component={Login}/>
								</div>
					}
				</Fragment>
			</Router>
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
