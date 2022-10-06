import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import swal from 'sweetalert';

import axios from 'axios';


export default function LoginCard() {
  
  const {handleSubmit, reset, register} = useForm()
  const navigate = useNavigate()
  const [response,setResponse] = useState('')
  const [token, setToken] = useState('')

  const login = (data)=> {
    axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', data)
    .then(res => {
      setResponse(res.data)
      if(res.data.status == 'success') {
        localStorage.setItem('token', res.data.data.token)
        navigate('/')
      } 
    })
    .catch(err => {
      swal({
        title: "There is a mistake",
        text: err.response.data.message,
        icon: "error",
      });
      console.log("There's an error with: ", err.response)
    })

    console.log(response)
  }
  return (
    <Form className='loginForm mt-5' onSubmit={handleSubmit(login)}>
        <h3>Welcome!</h3>
        <h4>Type your credentials to continue</h4>
        <Alert variant="success">
            <Alert.Heading>Test data</Alert.Heading>
            <p><i className='bx bxs-envelope' style={{color:'#fff9f9'}}></i>  mason@gmail.com</p>
            <p><i className='bx bxs-lock-alt' style={{color:'#fff9f9'}}></i>  mason1234</p>
        </Alert>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter your email"
          {...register('email')}
          />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password"
          {...register('password')}
          />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  )
}
