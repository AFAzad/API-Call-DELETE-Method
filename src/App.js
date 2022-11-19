// import logo from './logo.svg';

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getList();
  }, []);
  // console.log(user);
  function getList() {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((response) => {
        setUser(response);
      });
    });
  }

  function deleteUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/users${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((response) => {
        console.log(response);
        getList();
      });
    });
  }

  return (
    <div className="App">
      <h1>API Call Delete Method</h1>

      <table style={{ border: "1" }}>
        <tbody>
          <tr>
            <td>ID</td>
            <td>User Name</td>
            <td>Name</td>
            <td>Email</td>
          </tr>
          {user.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => deleteUser(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
