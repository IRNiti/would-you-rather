import React from 'react'

export default function LeaderboardUser(props){
    const answers = Object.keys(props.user.answers).length
    const questions = props.user.questions.length
    return(
        <div>
            <p>{props.user.name}</p>
            <img src={props.user.avatarURL} alt={`Avatar of ${props.user.name}`} className='avatar'/>
            <p>{`Answered questions: ${answers}`}</p>
            <p>{`Created questions: ${questions}`}</p>
            <p>{`Score: ${answers + questions}`}</p>
        </div>
    )
}