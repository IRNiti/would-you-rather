import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionVote from './QuestionVote'
import QuestionResult from './QuestionResult'
import NotFound from './NotFound'

// Connected component displaying either a question poll, result or 404 page based on the question status
// if a question has been answered, show question result
// if a question has not been answered, show question poll
// if a question id is not found in the database, show a 404 Not Found page
class QuestionCont extends Component{
    render(){
        return(
            <div>
                {this.props.question ? (
                this.props.answered ?
                    (<QuestionResult id={this.props.match.params.id}/>) :
                    (<QuestionVote id={this.props.match.params.id}/>)) :
                    (<NotFound />)}
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions},{match}){
    const qid = match.params.id

    return {
        answered: authedUser && users[authedUser].answers[qid],
        question: questions[qid]
    }
}

export default connect(mapStateToProps)(QuestionCont)