import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderboardUser from './LeaderboardUser'

// Connected component sorting users by score and displaying the list of users
class Leaderboard extends Component {
    render(){
        const {users} = this.props
        const sortedUsers = Object.keys(users).sort((a, b) => {
            return ((Object.keys(users[b].answers).length + users[b].questions.length) -
                (Object.keys(users[a].answers).length + users[a].questions.length))
        })

        return(
            <div>
                {sortedUsers.map((userId) => (
                    <LeaderboardUser key={userId} user={users[userId]}/>
                ))}
            </div>
        )
    }
}

function mapStateToProps({users}){
    return{
        users
    }
}

export default connect(mapStateToProps)(Leaderboard)