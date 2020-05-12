import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    render() {
        console.log(this.props)
        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' activeClassName='active'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' activeClassName='active'>
                            Leaderboard
                        </NavLink>
                    </li>
                    <li>
                        Hello {this.props.loggedInUser}
                    </li>
                    <li>
                        <NavLink to='/login' activeClassName='active'>
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

function mapStateToProps({authedUser, users}){
    return {
        loggedInUser: authedUser ? users[authedUser].name : ''
    }
}

export default connect(mapStateToProps)(Nav)