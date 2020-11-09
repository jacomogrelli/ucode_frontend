import React, {Component} from 'react'
import './App.css';
import Car from './Car/Car.js'
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";

export const ClickedContext = React.createContext(false)

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cars: [
        {name: 'Ford', year: 2018},
        {name: 'Audi', year: 2016},
        {name: 'Mazda', year: 2015}
      ],
      pageTitle: 'React components',
      showCars: false,
      clicked: false
    }
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

  deleteHandler = (index) => {
    const cars = [...this.state.cars]

    cars.splice(index, 1)
    this.setState({cars})
  }

  onChangeName = (name, index) => {
    const car = this.state.cars[index]
    car.name = name;
    const cars = [...this.state.cars]
    this.setState({cars})
  }

  // componentWillUnmount() {
  //   console.log('App will mount')
  // }
  //
  // componentDidMount() {
  //   console.log('App did mount')
  // }

  render() {
    const divStyle = {
      textAlign: 'center',
    }

    let cars = null
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car name={car.name}
                 year={car.year}
                 index={index}
                 onDelete={this.deleteHandler.bind(this, index)}
                 onChangeName={(event) => this.onChangeName(event.target.value, index)}/>
          </ErrorBoundary>
        )
      })
    }

    return (
      <div style={divStyle}>
        <h1>{this.props.title}</h1>
        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>
        <button onClick={this.toggleCarsHandler}>Toggle Cars</button>
        <button onClick={() => this.setState({clicked: true})}>Change clicked</button>
        {cars}
      </div>
    );
  }
}

export default App;
