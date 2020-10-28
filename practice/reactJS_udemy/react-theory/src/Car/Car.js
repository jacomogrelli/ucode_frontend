import React from 'react'
//
// function Car() {
//   return (
//     <h1>This is car component</h1>
//   )
// }

// const Car = () => <h1>This is car component</h1>;


// export default Car

export default (props) => (
  <div>
    <h3>Car name: {props.name}</h3>
    <p>Year: {props.year}</p>
    <button onClick={props.onChangeTitle}>Click</button>
  </div>
)
