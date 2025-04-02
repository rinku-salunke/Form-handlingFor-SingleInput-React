import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function SearchForm() {
  const [productName, setProductname] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(productName);
  }

  function handleChange(e) {
    setProductname(e.target.value);
  }

  return (
    <>
      <h1>Search Products</h1>
      <form onSubmit={handleSubmit}>
        Enter Product Name:
        <input type="text" name="pname" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SearchForm />
    </>
  );
}

export default App;
