import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#section1">Number Operations Example</a>
        </li>
        <li>
          <a href="#section2">Array Operation Example</a>
        </li>
        <li>
          <a href="#section3">Conditional Rendering Example</a>
        </li>
        <li>
          <a href="#section4">Event Handling</a>
        </li>
        <li>
          <a href="#section5">Event Handling With useState</a>
        </li>
        <li>
          <a href="#section6">Pass The Data Using Props To Other Component</a>
        </li>
        <li>
          <a href="#section7">React useRef hooks</a>
        </li>
        <li>
          <a href="/prjects">React Projects</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
