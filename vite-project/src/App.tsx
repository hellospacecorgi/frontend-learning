import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import DismissableAlert from "./components/DismissableAlert";
import Todo from "./components/todo";
import { useState } from "react";

function App() {
  let items = ["Hong Kong", "Taiwan", "Japan", "Singapore", "Sydney"];
  const handleSelectItem = (item: String) => {
    console.log(item);
  };
  const handleClickButton = (word: String) => {
    console.log(word);
  };
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      <Todo></Todo>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Hello <span>my</span> World
      </Alert>
      <Button color="success" onButtonClick={() => handleClickButton("yay")}>
        First <b>Button</b>
      </Button>
      <Button color="danger" onButtonClick={() => handleClickButton("oh no")}>
        Second <i>Button</i>
      </Button>
      <Button onButtonClick={() => setAlertVisibility(true)}>Show Alert</Button>
      {alertVisible && (
        <DismissableAlert onClose={() => setAlertVisibility(false)}>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
        </DismissableAlert>
      )}
    </div>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
