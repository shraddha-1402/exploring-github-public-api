import React from 'react';

const Search = ({handleChange, enterPressed, xhttpReq}) => {
  return(
    <React.Fragment>
    <div>
      <div><h3>Search:</h3></div>
      <div>
        <input type="text" name="username" onChange={handleChange} onKeyPress={enterPressed}/>
        <button onClick={xhttpReq}>CLICK THIS</button>
      </div>
    </div>
    </React.Fragment>
  )
}
//Object.keys(userInfo).length === 0 && userInfo.constructor === Object
export default Search;