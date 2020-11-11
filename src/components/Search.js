import React, {useState} from 'react';

const Search = ({username, handleChange, xhttpReq, setPrevUN}) => {
  
  const enterPressed = (event) => {
    var code = event.keyCode || event.which;
    if(code === 13) {
      xhttpReq();
      var usrList = new Set([...username]);
      setPrevUN(usrList);
    }
  }
  return(
    <div>
      <div><h3>Search:</h3></div>
      <div>
        <input type="text" name="username" onChange={handleChange} onKeyPress={enterPressed}/>
        <button onClick={()=>{xhttpReq()}}>CLICK THIS</button>
      </div>
    </div>
  )
}
//Object.keys(userInfo).length === 0 && userInfo.constructor === Object
export default Search;