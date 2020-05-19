import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionVote from './QuestionVote'
import QuestionResult from './QuestionResult'
import NotFound from './NotFound'

class QuestionCont extends Component{
    render(){
        console.log('props in question cont: ', this.props)
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