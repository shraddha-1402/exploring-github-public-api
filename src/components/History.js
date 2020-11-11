import React from 'react';

const History = ({prevUN})=> {
  return(
    <ul>
      {prevUN.map((value, index)=>{
        return <li key={index}>{value}</li>
      })}
    </ul>
  )
}

export default History;