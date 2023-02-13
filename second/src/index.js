import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const message="Hiiiiiiii"
const message1=<h2>Helllooooooo</h2>

const arr=['Apple','Orange']

root.render(
  <div>
        <h1>Hello ReactJS!!!</h1>
         <p>React Demo!!!</p>
         <p>Message : {message}</p>
         {message1}
         <ul>
         {arr.map((fruit)=>(
            <li>{fruit}</li>
          ))}

         </ul>
        
  </div>

  
);


