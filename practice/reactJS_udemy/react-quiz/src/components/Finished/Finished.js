import React from 'react'
import classes from './Finished.module.css'
import Button from "../UI/Button/Button";

const Finished = props => {
  return (
    <div className={classes.Finished}>
      <h1>Finished!</h1>
      <p className={classes.WriteAnswers}>
        Wright answers:&nbsp;<strong>{ props.rightAnswers }</strong>&nbsp;of
        &nbsp;<strong>{ props.sizeOfQuiz }</strong>.
      </p>
      <div>
        <Button onRetry={props.onRetry} type={'success'}>Retry</Button>
      </div>
    </div>
  )
}

export default Finished
