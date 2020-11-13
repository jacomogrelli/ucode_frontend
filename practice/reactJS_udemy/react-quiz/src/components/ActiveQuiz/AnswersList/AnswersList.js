import React from 'react'
import classes from './AnswersList.module.css'
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = props => {
  return (
    <ul className={classes.AnswerList}>
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem key={index}
                      answer={answer}
                      onAnswer={props.onAnswer}
                      questionState={props.questionState ?
                        props.questionState[answer.answerId] : null}/>
        )
      })}
    </ul>
  )
}

export default AnswerList
