import React from 'react'
import { Container } from 'react-bootstrap'

const Drawing = ({error}) => {



  return (
    <Container>
      <h1 className='text-center my-3'>Adam Asmaca</h1>
      <Container className='drawing'>
        <div className="footer"></div>
        <div className="direct"></div>
        <div className="top"></div>
        <div className="endirect"></div>
        <div className={`head ${error >= 1 ? "" : "d-none"}`}></div>
        <div className={`body ${error >= 2 ? "" : "d-none"}`}></div>
        <div className={`left ${error >= 3 ? "" : "d-none"}`}></div>
        <div className={`right ${error >= 4 ? "" : "d-none"}`}></div>
        <div className={`foot ${error >= 5 ? "" : "d-none"}`}></div>
      </Container>
    </Container>
  )
}

export default Drawing
