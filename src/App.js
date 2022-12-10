import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState(null)

  useEffect(() => {
    const userRes = axios.get('http://localhost:5000/users').then(res => {
      setUsers(res.data)
      console.log(res.data)
    });
  }, [])

  return (
    <div className="App">
      <h1>Hi</h1>
      {users ? (
        users.map((user) => (
          <div key={user.id}>
            <p>name: {user.name}</p>
            <p>surname: {user.surname}</p>
            <p>age: {user.age}</p>
          </ div>
        ))
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}

export default App;
