// import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';

const NumberSelector = () => {
    const arrNumber=[1,2,3,4,5,6];
    const[selectNumber,setSelectNumber]=useState();

    console.log(selectNumber);
    return (
        <NumberSelectorContainer>
        <div className='flex'>
          {/* Rendering <Box> components based on arrNumber */}
          {arrNumber.map((value, i) => (
            <Box 
            isSelected={value===selectNumber}
            
            key={i} 
            onClick={()=>setSelectNumber(value)}>{value}</Box>
          ))}
     
    </div>

    <p>select Number</p>
   

    </NumberSelectorContainer>
  )
}

export default NumberSelector;


const NumberSelectorContainer=styled.div`
display: flex;
flex-direction: column;

 
 .flex{
    display: flex;
    align-items: end;
 gap: 20px;
 }`

const Box= styled.div`

border: 1px solid;
width:30px;
height: 30px;
font-size:24px;
align-items: center;
display: grid;
background-color: ${(props)=>(props.isSelected?"black":"white")};
color: ${(props)=>(!props.isSelected?"black":"white")};

justify-content: center;


`
