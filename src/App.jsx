import { useState } from 'react'
// import styled from 'styled-components'
import StartGame from './component/StartGame'
import GamePlay from'./component/GamePlay';
import RollDice from './component/RollDice';



function App() {
const [ isGameStarted,setIsGameStarted]=useState(false);

const toggleGamePlay=(prev)=>{
setIsGameStarted(prev=>!prev);
console.log('123')
}
// const [data, setData]=useState('fghjk,')
  return (
    
    <>
{ isGameStarted?<StartGame toggle ={toggleGamePlay} />: <GamePlay/>};
<RollDice/>

{/* <button onClick={toggleGamePlay}>Toggle Game</button> */}
 </>
  )
 

}

export default App

