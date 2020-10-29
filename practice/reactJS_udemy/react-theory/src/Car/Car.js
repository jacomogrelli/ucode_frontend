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
  <div style={{
    border: '1px solid black',
    display: 'block',
    width: 'fit-content',
    margin: '5px auto'
  }}>
    <h3>Car name: {props.name}</h3>
    <p>Year: {props.year}</p>
    <input type="text" onChange={props.onChangeName} value={props.name}/>
    <button onClick={props.onChangeTitle}>Click</button>
  </div>
)
