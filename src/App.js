import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp,faThumbsDown} from '@fortawesome/free-solid-svg-icons'
import image1 from '../src/images/masum.jpg';
import image2 from '../src/images/Rayhanur.jpg';
import image3 from '../src/images/Saddam.jpg';
import image4 from '../src/images/Sourov.jpg';
import { useState } from 'react';
function App() {
  return (
    <div className="App">

      <Person name = 'Abdullah Al Masum' img={image1} nayika = 'Moushumi'></Person>
      <Person name = 'Rayhanur Islam' img={image2}></Person>
      <Person name = 'Saddam Hossen' img={image3}></Person>
      <Person name = 'Sourov Devhnath' img={image4}></Person>
      <Person name = 'ChekaKwa Bapparaj' img={image4}></Person>
      <Person name = 'ChekaKwa Bapparaj' img={image4}></Person>

    </div>
  
  )
}

function Person(props){
  const [count, setCount] = useState(0);
  const handleIncrease = () =>{
      const newCount = count+1;
      setCount(newCount);
  };
  const handleDecrease = () =>{
    const newCount2 = count-1;
    setCount(newCount2);
};

  const personStyle = {
    border: '2px solid orange',
    // borderRight:'150px solid orange',
    // borderLeft:'150px solid orange',
    padding:'10px',
    margin: '50px 0',
    backgroundColor:'#c5d5cb',
    
    
  }
  return(
    <div className='myClass' style = {personStyle}>
      <div className="imge">
         <img  src={props.img} alt="" />
      </div>
      <div className="media">

      </div>
      <div className="contents">
          <h1>Name: {props.name}</h1>
          <h3>Dept. of CSE</h3>
          
      </div>
        <div className="buttons">
          <button onClick = {handleIncrease} className='btn1'><FontAwesomeIcon icon={faThumbsUp} />&nbsp; </button>
          <button onClick = {handleDecrease} className='btn2'><FontAwesomeIcon icon={faThumbsDown} />&nbsp; </button>
          <h3>Count Reaction: {count} </h3>
        </div>
    </div>
  ) 
}


export default App;
