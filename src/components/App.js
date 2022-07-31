import React, from 'react'
import '../styles/App.css';
const App = () => {
  
  const handleClick = (event) =>{
    // use console.log
    const ans=event.target.id;
    const str="Button id is:-"+ans;
    console.log(str);

  }

  
  // do not remove the two buttons or change their id
  return (
    <div id="main">
      <button onClick={handleClick} id="button-a">Button A</button>
      <button onClick={handleClick} id="button-b">Button B</button>
    </div>
  )
}


export default App;
