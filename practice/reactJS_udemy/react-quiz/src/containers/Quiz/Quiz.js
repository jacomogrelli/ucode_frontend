import React from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
  state = {
    activeQuestion: 0,
    questionState: null, //{[id]: success//error}
    quiz: [
      {
        question: 'This is the first question',
        questionId: 1,
        rightAnswer: 1,
        answers: [
          {text: 'First variant', answerId: 1},
          {text: 'Second variant', answerId: 2},
          {text: 'Third variant', answerId: 3},
          {text: 'Fourth variant', answerId: 4},
        ]
      },
      {
        question: 'This is the second question',
        questionId: 2,
        rightAnswer: 2,
        answers: [
          {text: 'First variant', answerId: 1},
          {text: 'Second variant', answerId: 2},
          {text: 'Third variant', answerId: 3},
          {text: 'Fourth variant', answerId: 4},
        ]
      },
      {
        question: 'This is the third question',
        questionId: 3,
        rightAnswer: 3,
        answers: [
          {text: 'First variant', answerId: 1},
          {text: 'Second variant', answerId: 2},
          {text: 'Third variant', answerId: 3},
          {text: 'Fourth variant', answerId: 4},
        ]
      }
    ]
  }

  onAnswer = (answerId) => {
    let questionState = this.state.questionState

    if (questionState &&
      questionState[Object.keys(questionState)] === 'success')
      return;

    if (this.state.quiz[this.state.activeQuestion].rightAnswer === answerId) {
      questionState = {[answerId]: 'success'}
      this.setState({questionState: questionState})
      if (this.state.activeQuestion + 1 === this.state.quiz.length) {
        console.log('finish')
      } else {
        const timeout = window.setTimeout(() => {
          const tmp = this.state.activeQuestion + 1
          this.setState({activeQuestion: tmp})
          window.clearTimeout(timeout)
          questionState = null;
          this.setState({questionState: questionState})
        }, 1000)
      }
    } else {
      questionState = {[answerId]: 'error'}
      this.setState({questionState: questionState})
      console.log('incorrect answer')
    }
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div>
          <h1>Quiz</h1>
          <ActiveQuiz activeQuestion={this.state.activeQuestion}
                      quiz={this.state.quiz[this.state.activeQuestion]}
                      sizeOfQuiz={this.state.quiz.length}
                      questionState={this.state.questionState}
                      onAnswer={this.onAnswer}/>
        </div>
      </div>
    )
  }
}

export default Quiz
