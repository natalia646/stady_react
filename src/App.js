import "./App.css";
import Book from "./components/Book";
import Welcome from "./components/Welcome";
import Time from "./components/Comment";
import State from "./components/State";
import Count from "./components/Count";

function App() {
  return (
    <div>
      <Welcome name="Natalia" />
      <Time time = 'tomorrow'/>
      <Book name="JS" price="100 $" />
      <Book name="JSX" price="300 $" />

      <State/> 
      <Count/>
    </div>
  );
}

export default App;