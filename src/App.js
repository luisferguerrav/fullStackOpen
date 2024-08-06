//*import logo from './logo.svg';
import React from 'react';
import './App.css';

// const App = () =>
//   {
//     const now = "Agosto 6 a las 4 AM"
//     const a = 10 
//     const b = 20
//     return React.createElement(
//       "div", 
//       null,
//       React.createElement(
//         "p", null, "hola world, it is ", now.toString()
//       ),
//       React.createElement(
//         "p", null, a, " mas ", b, " es ", a+b
//       )
//     )
//   }


const Hello = (Props) => {
    console.log(Props);
    
    
  return(
    <div>
      <p> Hello {Props.name}, you are {Props.age} years old </p>
    </div>
  )
}

  const App = () => {
    const name  = "peter"
    const age = 10 
    
    return(
      <div>
        <h1> Greetings</h1>
        <Hello name = "maya" age ={ 26 + 10 }/>
        <Hello name = {name} age ={age} />
        
      </div>
    )
  }

export default App;
