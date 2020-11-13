import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span><strong>{ props.activeQuestion + 1 }. </strong> { props.quiz.question }</span>
        <small>{ props.activeQuestion + 1 } of { props.sizeOfQuiz }</small>
      </p>
      <AnswersList
        activeQuestion={props.activeQuestion}
        answers={props.quiz.answers}
        onAnswer={props.onAnswer}
        questionState={props.questionState}
      />
    </div>
  )
}

export default ActiveQuiz
