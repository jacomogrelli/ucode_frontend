import React, {Component} from 'react'
import './App.css';
import Car from './Car/Car.js'

class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2015}
    ],
    pageTitle: 'React components',
    showCars: false
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle,
    })
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName = (name, index) => {
    const car = this.state.cars[index]
    car.name = name;
    const cars = [...this.state.cars]
    this.setState({cars})
  }

  render() {
    const divStyle = {
      textAlign: 'center',
    }

    let cars = null
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car key={index} name={car.name} year={car.year}
               onChangeName={(event) => this.onChangeName(event.target.value, index)}/>
        )
      })
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        {/*<input type="text" onChange={this.handleInput}/>*/}

        <button onClick={this.toggleCarsHandler}>Toggle Cars
        </button>

        { cars }
      </div>
    );
  }
}

export default App;
