// import React from 'react'
import styled from 'styled-components';

const TotalScore = () => {
  return (
    <ScoreContainer>
      <h1>0</h1>
      <p>Total Score</p>
      </ScoreContainer>
  )
}

export default TotalScore;
const ScoreContainer=styled.div`
display: flex;
flex-direction:column;
max-width: 200px;
align-items: center;
 h1
 {
    padding: 20px;
    font-weight: 800;
    font-size:80px;
    line-height: 40px;
 }
 p{
    font-size: 15px;
    font-weight:200;

 }


`
