import React from 'react';
import {useState} from 'react';
import './style.css';
import Navbar from './components/Navbar';

export default function App() {
  let a = 10;
  let b = 20;
  let c = a + b;
  let number = 51;
  let user = ['user1', 'user2', 'user3', 'user4', 'user5'];

  let x = 0;
  const btnClick = () => {
    x++;
    console.log('Clicked on button ' + x);
  };

  const [num, setNum] = useState(0);
  const inCreaseNumber = () => {
    setNum(num+1);
  }
  return (
    <div>
      <header>
        <h1>Learning React JS</h1>
      </header>
      {/* This is example of simple component. */}
      <Navbar />

      <section id="section1">
        <h2>Number Operations Example</h2>
        <p>a = 10;</p>
        <p>b = 20;</p>
        <p> c = a + b;</p>
        {/* This is example of displying the values of variables. */}
        <p>
          The addition of {a} amd {b} is: {c}.
        </p>
      </section>

      <section id="section2">
        <h2>Array Operation Example</h2>
        <p>user = ['user1', 'user2', 'user3', 'user4', 'user5']</p>
        <ul>
          {/* This is example rendering each element of array in HTML. */}
          {user.map((user) => {
            return <li>{user}</li>;
          })}
        </ul>
      </section>

      <section id="section3">
        <h2>Conditional Rendering Example</h2>
        {/* This is example conditional rendering. */}
        <p>
          The number {number} is a
          {number % 2 == 0 ? <span> Even </span> : <span> Odd </span>}
          Number
        </p>
      </section>

      <section id="section4">
        <h2>Event Handling</h2>
        {/* This is example event handling. */}
        <p>
          <button onClick={btnClick}>Click Here</button>
        </p>
      </section>

      <section id="section5">
        <h2>Event Handling With useState</h2>
        {/* This is example event handling with useState. */}
        <p>{num}</p>
        <button onClick={inCreaseNumber}>Increase Number</button>
      </section>

      <footer>
        <p>By: Satyakee Ray</p>
      </footer>
    </div>
  );
}
