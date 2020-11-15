import React from 'react'
import classes from './Backdrop.module.css'

const BackDrop = props => {
  return <div className={classes.Backdrop} onClick={props.onClose} />
}

export default BackDrop
