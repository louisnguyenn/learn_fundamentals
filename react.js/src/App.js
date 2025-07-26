import './App.css';
import { useState } from 'react';

// const Person = (props) => {
//   return (
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>Last Name: {props.lastname}</h2>
//       <h2>Age: {props.age}</h2>
//     </>
//   )
// }

const App = () => {
  // const name = "Jane";
  // const isNameShowing = true;
  // const isUserLoggedIn = true;
  const [counter, setCounter] = useState(0);  // provide initial value in the function

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
      {/* <h1>Hello, {isNameShowing ? name : "Someone"}</h1>
      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <h1>test</h1>
          <h2>There is no name</h2>
        </>
      )} */}
      {/* <Person name={"John"} lastname={"Doe"} age={"20"}/>
      <Person name={"Louis"} lastname={"Nguyen"} age={"19"}/> */}
    </div>
  );
}

export default App;
