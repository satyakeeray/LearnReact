import React from 'react';
import { useState } from 'react';
import './style.css';
import Navbar from './components/Navbar';
import CardComponent from './components/CardComponent';

export default function App() {
  /* Example for number operations */
  let a = 10;
  let b = 20;
  let c = a + b;

  /* Example for conditional rendering */
  let number = 51;

  /* Example for array operations */
  let user = ['user1', 'user2', 'user3', 'user4', 'user5'];

  /* Example for event handling */
  let x = 0;
  const btnClick = () => {
    x++;
    console.log('Clicked on button ' + x);
  };

  /* Example for event handling With useState */
  const [num, setNum] = useState(0);
  const inCreaseNumber = () => {
    setNum(num + 1);
  };

  const [specialNumber, setSpecialNumber] = useState(0);
  const increment = () => {
    setSpecialNumber(specialNumber + 1);
  };
  const decrement = () => {
    setSpecialNumber(specialNumber - 1);
  };

  const setNumber = 0;

  return (
    <div>
      <header>
        <h1>Learning React JS</h1>
      </header>
      {/* This is an example of simple component. */}
      <Navbar />

      <section id="section1">
        <h2>Number Operations Example</h2>
        <p>a = 10;</p>
        <p>b = 20;</p>
        <p>c = a + b;</p>
        {/* This is an example of displying the values of variables. */}
        <p>
          The addition of {a} amd {b} is: {c}.
        </p>
      </section>

      <section id="section2">
        <h2>Array Operation Example</h2>
        <p>user = ['user1', 'user2', 'user3', 'user4', 'user5']</p>
        <ul>
          {/* This is an example of rendering each element of array in HTML. */}
          {user.map((user) => {
            return <li>{user}</li>;
          })}
        </ul>
      </section>

      <section id="section3">
        <h2>Conditional Rendering Example</h2>
        {/* This is an example of conditional rendering. */}
        <p>
          The number {number} is a
          {number % 2 == 0 ? <span> Even </span> : <span> Odd </span>}
          Number
        </p>
      </section>

      <section id="section4">
        <h2>Event Handling</h2>
        {/* This is an example of event handling. */}
        <p>
          <button onClick={btnClick}>Click Here</button>
        </p>
        <p>
          <span>Click on the button and check the browser console.</span>
        </p>
      </section>

      <section id="section5">
        <h2>Event Handling With useState</h2>
        {/* This is an example of event handling with useState. */}
        <p>{num}</p>
        <button onClick={inCreaseNumber}>Increase Number</button>
      </section>

      <section id="section6">
        <h2>Pass The Data Using Props To Other Component</h2>
        {/* This is an example of passing of data using props to the other component. */}
        <p>This following number is increasing/decresing depending on the clicking on button and updated number is passed to <strong>CardComponent</strong></p>
        <p>Updated Number: {specialNumber}</p>
        <button onClick={increment}>Increment Number</button>
        <button onClick={decrement}>Decrement Number</button>
        <CardComponent number={specialNumber} />
      </section>
      
      <footer>
        <p>By: Satyakee Ray</p>
      </footer>
    </div>
  );
}
