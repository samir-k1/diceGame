import React , { useState  } from 'react';
import styled from 'styled-components';


const RollDice = () => {
  
  const [currentDice, setCurrentDice] = useState(1);

  const generateRandomNumber= (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);

  };

  // Generate a random number between 1 and 6 for a six-sided dice
  const roleDice=()=>{

  
  const randomNumber = generateRandomNumber(1, 6);
  setCurrentDice((prev)=> randomNumber);

  };



return (
  <DiceContainer>
    <div className='dice' onClick={roleDice}>
    <img src={`/public/Dice/dice_${currentDice}.png`} alt={currentDice} />
    </div>
  </DiceContainer>
);
};


export default RollDice;
  



const DiceContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;