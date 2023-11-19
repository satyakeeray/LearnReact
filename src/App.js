import React from 'react';
import './style.css';
import Navbar from './components/Navbar';

export default function App() {
  let a = 10;
  let b = 20;
  let c = a + b;
  let user = ['user1', 'user2', 'user3', 'user4', 'user5'];
  return (
    <div>
      <header>
        <h1>Learning React JS</h1>
      </header>
      {/* This is example of simple component. */}
      <Navbar />

      <section id="section1">
        <h2>Number Operations</h2>
        <p>a = 10;</p>
        <p>b = 20;</p>
        <p> c = a + b;</p>
        <p>The addition of {a} amd {b} is: {c}.</p>
      </section>

      <section id="section2">
        <h2>Section 2</h2>
        <p>This is the content of Section 2.</p>
      </section>

      <section id="section3">
        <h2>Section 3</h2>
        <p>This is the content of Section 3.</p>
      </section>

      <footer>
        <p>By: Satyakee Ray</p>
      </footer>
    </div>
  );
}
