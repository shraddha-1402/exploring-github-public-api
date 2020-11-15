import React from 'react';
import '../App.css';

const History = ({usrArray, xhttpReq})=> {
  let usrList = new Set(usrArray);
  usrList = [...usrList];

  return(
    <div>
    <label>History</label>
    <div>
      {usrList.map((item, index) => {
        return <div key={index} onClick={xhttpReq} className="searchUsrName" >{item}</div>
      })}
    </div>
  </div>
  )
}

export default History; 