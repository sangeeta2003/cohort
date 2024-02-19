// import React from 'react';
// import { useState } from 'react';

// // for todos
// let counter = 4;
// function App() {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: 'go to gym',
//       description: 'go to gym today',
//     },
//     {
//       id: 2,
//       title: 'eat food',
//       description: 'eat food',
//     },
//     {
//       id: 3,
//       title: 'go to class',
//       description: 'go to class',
//     },
//   ]);

//   function addTodo() {
//     setTodos([
//       ...todos,
//       {
//         id: counter++,
//         title: `New Todo ${Math.random()}`,
//         description: 'New todo description',
//       },
//     ]);
//   }

//   return (
//     <div>
//       <button onClick={addTodo}>Add a todo</button>
//       {todos.map((todo) => (
//         <Todo key={todo.id} {...todo} />
//       ))}
//     </div>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h5>{description}</h5>
//     </div>
//   );
// }



// for cardwrapper


function App() {
  return (
    <div>
      <CardWrapper innercomponent={<TextComponent />} />
    </div>
  );
}

function CardWrapper({ innercomponent }) {
  return (
    <div style={{ border: '2px solid black' }}>
      {innercomponent}
    </div>
  );
}

function TextComponent() {
  return (
    <div>
      hi there!
    </div>
  );
}

export default App;
