import React from 'react';

const History = ({usrArray})=> {
  // console.log(typeof(prevUN));
  // console.log(prevUN);
  // const previousvUN = JSON.parse({prevUN});
  let usrList = new Set(usrArray);
  let tmpUsrList = [...usrList];
  console.log(typeof(tmpUsrList))
  return(
    <div>
    <label>History</label>
    <ul>
      
    </ul>
  </div>
  )
}

export default History;