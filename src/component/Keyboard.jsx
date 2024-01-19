import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'

const Keyboard = ({question,setError}) => {

    const [wrongAnswer, setWrongAnswer] = useState([])
    const [answer, setAnswer] = useState([])

    const alfabe = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"]

    
    

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
    <Container>
        <h5 className='my-5'>Soru: {question.soru}</h5>
        <div className="answer d-flex align-items-center g-3 justify-content-center">
            {question.harf_harf?.map((item,index)=>(
                <div key={index} className='harf mb-4'><span className={`${answer.includes(item)?"":"d-none"}`}>{item}</span></div>
            ))}
        </div>

    </Container>

    <Container className='d-flex g-3 flex-wrap justify-content-center'>
        {alfabe.map((item,index) => (
        <Button key={index} className={`keyboard ${answer.includes(item)?"bg-success":""}`} disabled={wrongAnswer.includes(item)} onClick={()=>handleClick(item)}>{item}</Button>
        ))}
    </Container>
    </>

  )
}

export default Keyboard