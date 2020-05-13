import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function QuestionResultOption(props){
    const {question, answer, totalVotes, option} = props
    const progress = question[option].votes.length/totalVotes*100
    return(
        <div>
            <p>{question[option].text}</p>
            <ProgressBar now={progress} label={`${progress}%`}/>
            <p>{question[option].votes.length} out of {totalVotes} votes</p>
            {answer === option && (
                <p>Your vote</p>
            )}
        </div>
    )
}