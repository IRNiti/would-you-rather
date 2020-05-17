import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import QuestionList from './QuestionList'

class QuestionListCont extends Component {

    // maybe use this for tabs
    // https://github.com/reactjs/react-tabs
    render(){
        return(
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Unanswered Questions</Tab>
                        <Tab>Answered Questions</Tab>
                    </TabList>

                    <TabPanel>
                        <QuestionList answered={false}/>
                    </TabPanel>
                    <TabPanel>
                        <QuestionList answered={true}/>
                    </TabPanel>
                </Tabs>
            </div>

        )
    }
}

export default QuestionListCont