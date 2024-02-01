// import React from 'react'

import styled from "styled-components";
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"

// import { useState } from "react"

const GamePlay = () => {

  return ( 
    <StyleGamePlayBar>
    <div className="StyleGamePlay">
      <TotalScore/>
      <NumberSelector/>
    </div>
    </StyleGamePlayBar>
  )
}

export default GamePlay;

const StyleGamePlayBar=styled.div`
padding-top: 20px;
.StyleGamePlay{
  display: flex;
  justify-content: space-between;
  align-items: center;

}
`
