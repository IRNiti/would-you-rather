import React, { Component } from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class PrivateRoute extends Component {
    render(){
        const { component : Component, authedUser, ...rest } = this.props
        return(
            <Route {...rest} render={(props) => (
                authedUser ?
                <Component {...props}/> :
                <Redirect to={{
                    pathname: '/login',
                    state: {
                        redirectTo: this.props.location.pathname
                    }
                }}/>
            )}/>
        )
    }
}

function mapStateToProps({ authedUser }){
    return {
        authedUser
    }
}
export default withRouter(connect(mapStateToProps)(PrivateRoute))