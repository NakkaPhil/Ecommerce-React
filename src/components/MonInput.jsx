import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button';
export default function MonInput({getByName}) {

  const [input,setInput] = useState('')

  return (
    <InputGroup className="mb-3">
        
        <Form.Control
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        />
        <Button variant="primary" onClick={()=> getByName(input)}>
          <i className='bx bx-search button-search' style={{color:'#e8d8d8'}} ></i>
          </Button>{' '}
  </InputGroup>
  )
}
