import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class PrivateRoute extends Component {
    render(){
        const { component : Component, authedUser, ...rest } = this.props
        console.log('props in private route: ', this.props)
        return(
            <Route {...rest} render={(props) => (
                authedUser ?
                <Component {...props}/> :
                <Redirect to={{
                    pathname: '/login',
                    state: {
                        redirectTo: this.props.path
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
export default connect(mapStateToProps)(PrivateRoute)