import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    render() {
        const { loggedInUser } = this.props
        return (
            <nav className='nav'>
                <ul className='left'>
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
                <ul>
                    <li className='right'>
                        Hello {loggedInUser.name}
                    </li>
                    <li className='right'>
                        <img src={loggedInUser.avatarURL} alt={`Avatar of ${loggedInUser.name}`} className='avatar-nav'/>
                    </li>
                    <li className='right'>
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