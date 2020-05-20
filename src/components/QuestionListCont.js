import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import QuestionList from './QuestionList'

// Presentational component to display the tabs on the home page
export default function QuestionListCont() {
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