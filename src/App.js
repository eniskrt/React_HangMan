import {  useEffect, useState } from "react";
import Drawing from "./component/drawing";
import 'bootstrap/dist/css/bootstrap.min.css';
import Keyboard from "./component/Keyboard.jsx";
import sorular from "../src/component/sorular.json"
import Lose from "./component/Lose.jsx";

function App() {
  const [question, setQuestion] = useState({});
  const [error, setError] = useState(0)


  const stateFiller = () => {
    let random = Math.floor(Math.random() * 10);
    const newQuestion = sorular.find(item => item.id === random); 
    setQuestion(newQuestion || {}); 
  };

  useEffect(() => {
    stateFiller();
  }, []);

 
  return (
    <>
    {error >= 6 ?
      <Lose setError={setError} stateFiller={stateFiller}/>:
    <div>
      <Drawing question={question} error={error}/>
      <Keyboard question={question} setError={setError}/>
    </div>
    }
    </>
  );
}

export default App;