import "./App.css";
import Book from "./components/Book";
import Welcome from "./components/Welcome";
import Time from "./components/Comment";
import Name from "./components/State/Name";
import Count from "./components/Count/Count";
import { useEffect } from "react";

function App() {

  useEffect(()=>{
    console.log('mount in App')
  })

  return (
    <div>
      <Welcome name="Natalia" />
      <Time time = 'tomorrow'/>
      <Book name="JS" price="100 $"  date = '20.12'/>
      <Book name="JSX" price="300 $" />
      <Name/> 
      <Count/>
    </div>
  );
}

export default App;