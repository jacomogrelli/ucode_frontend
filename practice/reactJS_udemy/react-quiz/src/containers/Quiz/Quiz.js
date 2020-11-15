import React from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import Finished from "../../components/Finished/Finished";

class Quiz extends React.Component {
  state = {
    activeQuestion: 0,
    isFinished: false,
    numberOfRightAnswers: 0,
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
    let answerResult = this.state.numberOfRightAnswers

    if (questionState != null)
      return;

    if (this.state.quiz[this.state.activeQuestion].rightAnswer === answerId) {
      questionState = {[answerId]: 'success'}
      answerResult += 1
      this.setState({
        questionState: questionState,
        numberOfRightAnswers: answerResult
      })
    } else {
      questionState = {[answerId]: 'error'}
      this.setState({questionState: questionState})
    }
    if (this.state.activeQuestion + 1 === this.state.quiz.length) {
      const timeout = window.setTimeout(() => {
        this.setState( {isFinished: true})
        window.clearTimeout(timeout)
      }, 1000)
    } else {
      const timeout = window.setTimeout(() => {
        const tmp = this.state.activeQuestion + 1
        this.setState({activeQuestion: tmp})
        window.clearTimeout(timeout)
        questionState = null;
        this.setState({questionState: questionState})
      }, 1000)
    }
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div>
          <h1>Quiz</h1>
          {this.state.isFinished ?
            <Finished rightAnswers={this.state.numberOfRightAnswers}
                      sizeOfQuiz={this.state.quiz.length} /> :
            <ActiveQuiz activeQuestion={this.state.activeQuestion}
                        quiz={this.state.quiz[this.state.activeQuestion]}
                        sizeOfQuiz={this.state.quiz.length}
                        questionState={this.state.questionState}
                        onAnswer={this.onAnswer} />
          }
        </div>
      </div>
    )
  }
}

export default Quiz
