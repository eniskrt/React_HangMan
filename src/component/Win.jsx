import React from 'react';
import Card from 'react-bootstrap/Card';
import img from "../img/kazananlar.jpg"
import { Button, Container } from 'react-bootstrap';
import { FaRecycle } from "react-icons/fa";

const Win = ({setError,stateFiller,setWin}) => {

    const resetGame = () => { 
        setError(0)
        stateFiller()
        setWin(false)
     }

  return (
    <Container className='d-flex alig-items-center justify-content-center h-100'>
        <Card className="d-flex align-items-center border-0" style={{width:"275px", height: "auto"}}>
          <Card.Img variant="top" src={img} style={{width:"250px", height: "auto"}} />
          <Card.Body>
            <Card.Title className='fs-3 text-success'>KAZANDINIZ... </Card.Title>
          </Card.Body>
          <Button className='bg-success border-0 w-25' onClick={()=>resetGame()}><FaRecycle /></Button>
        </Card>
    </Container>

  )
}

export default Win