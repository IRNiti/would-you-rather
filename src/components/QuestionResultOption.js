import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

// Presentational component displaying results for a given question option
export default function QuestionResultOption(props){
    const {question, answer, totalVotes, option} = props
    const progress = (question[option].votes.length/totalVotes*100).toFixed(0)
    return(
        <div className='card card-option'>
            <p>
                {question[option].text}
                {answer === option && (
                    <span className="badge badge-secondary">Your Vote</span>
                )}
            </p>
            <ProgressBar now={progress} label={`${progress}%`}/>
            <p>{question[option].votes.length} out of {totalVotes} votes</p>
        </div>
    )
}