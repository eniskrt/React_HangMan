import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'

const Keyboard = ({question,setError,setWin}) => {

    const [wrongAnswer, setWrongAnswer] = useState([])
    const [answer, setAnswer] = useState([])

    const alfabe = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"," ","1","2","3","4","5","6","7","8","9","0"]

    function removeDuplicates(arr) {
        return arr?.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);
    }
    const win1=removeDuplicates(question.harf_harf)?.join(", ")
    const win2=removeDuplicates(answer).filter(eleman => eleman !== ",")?.join(", ")
    
    
    
      useEffect(() => {
        
        if(win1===win2){
            setWin(true);
          }
    
      }, [win1,win2])
      


    const handleClick = (value) => { 
        
        if(question.harf_harf.includes(value)){
            setAnswer(prev => [...prev + value])
        }else{
           setWrongAnswer(prev => [...prev +value])
           setError(prev => prev + 1)

        }
        console.log("answer",answer);
        console.log(wrongAnswer);
     }


  return (
    <>
    <Container className='question'>
        <h5 className='my-5 text-center'>Soru: {question.soru}</h5>
        <div className="answer d-flex align-items-center g-3 justify-content-center">
            {question.harf_harf?.map((item,index)=>(
                <div key={index} className='harf mb-4'><span className={`${answer.includes(item)?"":"d-none"}`}>{item}</span></div>
            ))}
        </div>

    </Container>

    <Container className='main-keyboard d-flex g-4 flex-wrap justify-content-center'>
        {alfabe.map((item,index) => (
        <Button key={index} className={`keyboard ${answer.includes(item)?"bg-success":""}`} disabled={wrongAnswer.includes(item)} onClick={()=>handleClick(item)}>{item}</Button>
        ))}
    </Container>
    </>

  )
}

export default Keyboard