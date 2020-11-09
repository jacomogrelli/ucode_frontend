import React from 'react'
import './Car.css'
import withClass from "../hop/withClass";
import PropTypes from 'prop-types'
// import classes from './Car.css'


class Car extends React.Component {

  constructor(props) {
    super(props);

    this.inputRef = React.createRef()
  }

  componentDidMount() {
    if (this.props.index === 1)
      this.inputRef.current.focus()
  }

  render () {
    let inputClass = ['input']

    if (this.props.name !== '')
      inputClass.push('red')
    else
      inputClass.push('green')

    if (this.props.name.length > 4)
      inputClass.push('bolt')

    return (
      <React.Fragment>
        <h3>Car name: {this.props.name}</h3>
        <p>Year: {this.props.year}</p>
        <input
          ref={this.inputRef}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClass.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </React.Fragment>
    )
  }
}

Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func,
}

export default withClass(Car, 'Car')
