// import React from 'react'
import styled from 'styled-components'
//  import GamePlay from'./GamePlay';
const StartGame = ({toggle}) => {
  // console.log(data)
  return (
   <Container>
   <img src="/public/image/dices 1.png" />
   <div className='Content' >
    <h1>
      DICE GAME

    </h1>
    <button onClick={toggle}>PLAY NOW</button>

   </div>

   </Container>
  )

}
export default StartGame;

const Container= styled.div`
  max-width: 1100px;
  align-items: center;
  display:flex;
  justify-content: center;
  
  
  .Content h1{
    font-weight:bold;
    font-size: 60px;
    white-space: nowrap;
  }
  `;



  const Button= styled.button`

    background-color:black;
    color: white;
    border-radius: 4px;
    margin-top: 10px;
    width: 100px;
    white-space: nowrap;
    cursor: pointer;
    &:hover{
      background-color: grey;
      border-color: 1px solid;
      color: black;
      transition: 0.3s background ease-in;
      
    }


  `
  
   



