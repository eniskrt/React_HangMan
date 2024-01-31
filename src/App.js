import {  useEffect, useState } from "react";
import Drawing from "./component/drawing";
import 'bootstrap/dist/css/bootstrap.min.css';
import Keyboard from "./component/Keyboard.jsx";
import sorular from "../src/component/sorular.json"
import Lose from "./component/Lose.jsx";
import Win from "./component/Win.jsx";

function App() {
  const [question, setQuestion] = useState({});
  const [error, setError] = useState(0)
  const [win, setWin] = useState(false)



  const stateFiller = () => {
    let random = Math.floor(Math.random() * 49);
    const newQuestion = sorular.find(item => item.id === random); 
    setQuestion(newQuestion || {}); 
  };

  useEffect(() => {
    stateFiller();
  }, [win]);

 
  return (
    <>
    {error >= 6 ?
      <Lose setError={setError} stateFiller={stateFiller} question={question}/>:(
        win?(<Win setError={setError}  stateFiller={stateFiller} setWin={setWin}/>):(
    <div>
      <Drawing question={question} error={error}/>
      <Keyboard question={question} setError={setError} setWin={setWin}/>
    </div>)
    )}
    </>
  );
}

export default App;