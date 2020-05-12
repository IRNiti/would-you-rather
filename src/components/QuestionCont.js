import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionVote from './QuestionVote'
import QuestionResult from './QuestionResult'

class QuestionCont extends Component{
    render(){

        return(
            <div>
                {this.props.answered ?
                    (<QuestionResult id={this.props.match.params.id}/>) :
                    (<QuestionVote id={this.props.match.params.id}/>)}
            </div>
        )
    }
}

function mapStateToProps({authedUser, users},{match}){
    const qid = match.params.id

    return {
        answered: authedUser && users[authedUser].answers[qid]
    }
}

export default connect(mapStateToProps)(QuestionCont)