


import styled from "styled-components"


export  const Circle = styled.div`
    border-radius: ${({radius})=> radius}px;
background-color:${({ bgColor }) => bgColor} ;
width:${({ width }) => width}px;
height:${({ height }) => height}px;

`