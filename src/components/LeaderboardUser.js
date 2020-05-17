import React from 'react'

export default function LeaderboardUser(props){
    const answers = Object.keys(props.user.answers).length
    const questions = props.user.questions.length
    return(
        <div className='card card-leaderboard'>
            <div className='question-detail'>
                <img src={props.user.avatarURL} alt={`Avatar of ${props.user.name}`} className='avatar'/>
                <div className='vl'/>
                <div className='question'>
                    <h3 className='card-title'>{props.user.name}</h3>
                    <div className='leaderboard-results'>
                        <div className='leaderboard-line'>
                            <p>Answered questions</p>
                            <p>{answers}</p>
                        </div>
                        <div className='hb'/>
                        <div className='leaderboard-line'>
                            <p>Created questions</p>
                            <p>{questions}</p>
                        </div>
                    </div>
                </div>
                <div className='vl'/>
                <div className='card card-score'>
                    <div className="card-header center">
                        <h6>Score</h6>
                    </div>
                    <h2>
                        <span className="badge badge-pill badge-primary badge-score">{answers + questions}</span>
                    </h2>
                </div>
            </div>
        </div>
    )
}