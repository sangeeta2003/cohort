import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => { 
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(function (response) {
        setTodos(response.data.todos);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </>
  );
}
function Todo({ title, description }) {
  return (
    <div>
      <h1>{title || "No Title"}</h1>
      <p>{description || "No Description"}</p>
    </div>
  );
}



export default App;
