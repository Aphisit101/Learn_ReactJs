import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MyButton' 
import MyProfile from './components/MyProfile' 

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Aphisit Noiwa")
  const [ifTrue, setIfTrue] = useState(true);

  const user = {
    firstName: "John",
    lastName: "Doe",
    imgPic: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww"
  }

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  function handleInCreaseClick(){
    setCount(count + 1)
  }

  function handleDeCreaseClick(){
    setCount(count - 1)
  }

  return (
    <div className="App">
      <h1 style={{color: 'red', border: '1px solid black'}}>Welcome to my app</h1>
      <MyProfile data={user}/>
      <p>{count}</p>
      <button onClick={handleInCreaseClick}>Increase</button>
      <button onClick={handleDeCreaseClick}>Decrease</button>
      <MyButton />
      {/* Ternary Operator */}
      {ifTrue ? "Yes, it's true" : "No, it's false"}
      <ul>
        {products.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
