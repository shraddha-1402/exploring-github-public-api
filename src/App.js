import React from 'react';
import './App.css';
import Search from './components/Search';

const App = () => {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    let username = event.target.value;
    if (username !== "")
      setUsername(username);
  }
  return (
    <div className="App">
      <Search username={username} handleChange={handleChange}/>
      <History username={username}/>
    </div>
  );
}

export default App;
