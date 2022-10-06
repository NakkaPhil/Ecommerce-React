import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


export default function User() {
  const navigate = useNavigate()
  const logout = ()=> {
    localStorage.setItem('token', '')
    navigate('/')
  }
  return (
    <div className='mt-5 logout-card'>
      <Card>
        <Card.Header className='text-center'>Logout</Card.Header>
        <Card.Body>
          <Card.Title>User</Card.Title>
          <Card.Text>
           Your session is OK
          </Card.Text>
          <Button variant="danger" onClick={logout}>Logout</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
