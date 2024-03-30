import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App"

// function Card(props){
//   return (
//     <div className="main">
//       <h1>{props.name}</h1>
//       <img className='' src= {props.img}
//       alt="profile"
//         />
//       <p>{props.tel}</p>
//     </div>
   
//   )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<App/>

  </React.StrictMode>
);


