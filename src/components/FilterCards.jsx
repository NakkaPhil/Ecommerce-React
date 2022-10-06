import React, { useState, useEffect} from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { useSelector, useDispatch } from 'react-redux';

export default function FilterCards({filter, categories}) {  

  return (
    <div>
      <Accordion className='mb-3'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Categories</Accordion.Header>
          <Accordion.Body>
            <ul>
              {categories.map((category)=> (
                <li 
                className='categories'
                key={category.id}
                onClick={()=> filter(category.name)}
                >
                  <p>{category.name}</p>
                </li>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Price</Accordion.Header>
          <Accordion.Body>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">From</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">To</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <Button variant="outline-secondary">Filter</Button>{' '}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}
