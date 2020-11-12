import React from 'react'
import classes from './AnswersList.module.css'
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => {

  return (
    <ul className={classes.AnswerList}>
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswer={props.onAnswer}
            questionState={props.questionState}
          />
        )
      })}
    </ul>
  )
}

export default AnswersList
