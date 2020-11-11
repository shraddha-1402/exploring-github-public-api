import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import History from './components/History';

const App = () => {
  const [username, setUsername] = useState("");
  const [prevUN, setPrevUN] = useState([]);
  const handleChange = (event) => {
    let username = event.target.value;
    if (username !== "")
      setUsername(username);
  }
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
  return (
    <div className="App">
      <Search 
        username={username} 
        handleChange={handleChange} 
        xhttpReq={xhttpReq} 
        setPrevUN={setPrevUN}
      />
      <History prevUN={prevUN} xhttpReq={xhttpReq}/>
    </div>
  );
}

export default App;
