import React,{userState} from 'react'
import '../styles/App.css';
const App = () => {
  
  const handleClick = (event) =>{
    // use console.log
    console.log('Button id is:-button-a')

  }

  const handleClickTwo = (event) =>{
    // use console.log
    console.log('Button id is:-button-b')

  }

  // do not remove the two buttons or change their id
  return (
    <div id="main">
      <button onclick={handleClick} id="button-a">Button A</button>
      <button onclick={handleClickTwo} id="button-b">Button B</button>
    </div>
  )
}


export default App;
