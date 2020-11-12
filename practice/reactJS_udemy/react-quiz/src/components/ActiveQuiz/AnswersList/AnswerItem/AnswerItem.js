import React from 'react'
import classes from './AnswerItem.module.css'

const AnswerItem = props => {
  let cls = [classes.AnswerItem]

  if (props.questionState)
    cls.push(props.questionState)

  return (
    <li className={cls.join(' ')} onClick={() => props.onAnswer(props.answer.answerId)}>
      {props.answer.text}
    </li>
  )
}

export default AnswerItem
