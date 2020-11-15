import React, {Component} from 'react'
import classes from './Drawer.module.css'
import BackDrop from "../../UI/Backdrop/Backdrop";

const linkList = [1, 2, 3]

class Drawer extends Component {
  drawList = () => {
    return linkList.map((link, index) => {
        return (
          <li key={index}>
            <a>{index}. {link}</a>
          </li>
        )
      }
    )
  }

  render() {
    const cls = [
      classes.Drawer
    ]
    if (!this.props.isOpen)
      cls.push(classes.close)

    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>
            {this.drawList()}
          </ul>
        </nav>
        { this.props.isOpen ? <BackDrop onClose={this.props.onClose} /> :
                              null}
      </React.Fragment>
    )
  }
}

export default Drawer
