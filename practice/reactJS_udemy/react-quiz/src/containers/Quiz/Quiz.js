import React from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
  state = {
    quiz: []
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <h1>Quiz</h1>
        <ActiveQuiz />
      </div>
    )
  }
}

export default Quiz
