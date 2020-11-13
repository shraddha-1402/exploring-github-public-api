import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import History from './components/History'; 
// import uuid from 'uuid/dist/v4';    

const App = () => {
  const [username, setUsername] = useState("");
  const [usrArray, setUsrArray] = useState([]);
  
  const handleChange = (event) => {
    // console.log(prevUN);
    // console.log(typeof(prevUN));
    let username = event.target.value;
    if (username !== "")
      setUsername(username);
  }

  const xhttpReq = ()=>{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
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
      // tempUsrList.push(username);
      // console.log(tempUsrList);
      setUsrArray([...usrArray, username]);
      // var usrList = new Set(usrArray);
      // console.log(usrList);
      // setPrevUN(usrList);
    }
  }
  // var it = s.values(), val= null; val=it.next().value; 

  // mySet.forEach(async(item) =>{
  //   await doSomething(item)
  // })







  
  return (
    <div className="App">
      <Search 
        handleChange={handleChange} 
        enterPressed={enterPressed} 
        xhttpReq={xhttpReq}
      />
      <History usrArray={usrArray} xhttpReq={xhttpReq}/>
    </div>
  );
}

export default App;
