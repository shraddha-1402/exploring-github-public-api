import React, {useState} from 'react';

const Search = ({username, handleChange}) => {
  function xhttpReq(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ()=> {
      if (this.readyState === 4 && this.status === 200) {
        let userInfo = JSON.parse(xhttp.responseText);
        if(Object.keys(userInfo).length){
          console.log(xhttp.responseText);
          console.log({username});
        }
        else{
          alert("the user does not have any public repos");
        }
      }
    };
    xhttp.open("GET", `https://api.github.com/users/${username}/events/public`, true);
    xhttp.send();
  }
  const enterPressed = (event) => {
    var code = event.keyCode || event.which;
    if(code === 13) {
      xhttpReq();
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