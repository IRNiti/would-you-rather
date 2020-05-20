import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

// Connected component displaying the navigation bar and the currently logged in user
class Nav extends Component {
    render() {
        const { loggedInUser } = this.props
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
                </ul>

                {loggedInUser !== '' && (
                <ul className='nav-right'>
                    <li>
                        Hello {loggedInUser.name}
                    </li>
                    <li>
                        <img src={loggedInUser.avatarURL} alt={`Avatar of ${loggedInUser.name}`} className='avatar-nav'/>
                    </li>
                    <li>
                        <NavLink to='/login'>
                            Logout
                        </NavLink>
                    </li>
                </ul>
                )}

            </nav>
        )
    }
}

function mapStateToProps({authedUser, users}){
    return {
        loggedInUser: authedUser ? users[authedUser] : ''
    }
}

export default connect(mapStateToProps)(Nav)