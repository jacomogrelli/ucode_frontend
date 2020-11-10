import React from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
  state = {
    quiz: [
      {
        answers: [
          {text: "First variant"},
          {text: "Second variant"},
          {text: "Third variant"},
          {text: "Fourth variant"},
        ]
      }
    ]
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div>
          <h1>Quiz</h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
          />
        </div>
      </div>
    )
  }
}

export default Quiz
