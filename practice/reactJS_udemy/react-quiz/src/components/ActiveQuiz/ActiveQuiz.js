import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswersList from "./AnswersList/AnswersList";

export default props => {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span><strong>1. </strong> I'm a quiz question</span>
        <small>4 of 12</small>
      </p>
      <AnswersList
        answers={props.answers}
      />
    </div>
  )
}
