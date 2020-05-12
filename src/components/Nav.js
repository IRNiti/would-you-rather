import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

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
                    {loggedInUser !== '' && (
                        <Fragment>
                            <li>
                                Hello {loggedInUser.name}
                            </li>
                            <li>
                                <img src={loggedInUser.avatarURL} alt={`Avatar of ${loggedInUser.name}`} className='avatar-nav'/>
                            </li>
                            <li>
                                <NavLink to='/login' activeClassName='active'>
                                    Logout
                                </NavLink>
                            </li>
                        </Fragment>
                        )}
                </ul>
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