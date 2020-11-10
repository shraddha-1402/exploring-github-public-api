import React from 'react';

const History = ({username})=> {
  var preUsernames = new Set();
  preUsernames.add(username);
  return(
    <ul>
      {preUsernames.map((value, index)=>{
        return <li key={index}>{value}</li>
      })}
    </ul>
  )
}

export default History;