import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// comment 1
const App = () => {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    let username = event.target.value;
    if (username !== "")
      setUsername(username);
  }

  function xhttpReq(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        // Typical action to be performed when the document is ready:
        // document.getElementById("demo").innerHTML = xhttp.responseText;
        console.log(xhttp.responseText);
        console.log({username});
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

  return (
    <div className="App">
      <div><h3>Search:</h3></div>
      <div>
        <input type="text" name="username" onChange={handleChange} onKeyPress={enterPressed}/>
        <button onClick={()=>{xhttpReq()}}>CLICK THIS</button>
      </div>
    </div>
  );
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       username: ""
//     }
//   }

// handleChange = (event) => {
// let username = event.target.value;
// if (username !== "") {
//   this.setState({
//     username: username
//   })
//   }

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     // Typical action to be performed when the document is ready:
//     // document.getElementById("demo").innerHTML = xhttp.responseText;
//     console.log(xhttp.responseText);
//   }
// };
// xhttp.open("GET", "https://api.github.com/users/atharva-upadhye-01/events/public", true);
// xhttp.send()

//   }

//   render() {
// return (
//   <div className="App">
//     <div><h3>Search:</h3></div>
//     <div>
//       <input type="text" name="username" onChange={this.handleChange} />
//     </div>
//   </div>
// );
//   }
// }

export default App;
