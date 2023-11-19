import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";

export default function App() {
  let a = 10;
  let b = 20;
  let c = a + b;
  let user = ['user1','user2','user3','user4','user5'];
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Navbar/>
      <p>The addition of {a} and {b} is : {c}</p>
      <ul>
        {
          user.map(
            (user) => {
              return (
                <li>{user}</li>
              ) 
            }
          )
        }
      </ul>      
    </div>
  );
}