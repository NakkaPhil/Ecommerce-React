import React from 'react'
import Card from 'react-bootstrap/Card';
export default function PurchaseCard({purchase}) {
    const date = new Date(purchase.createdAt)
    const products = purchase.cart?.products
    
  return (
    <Card className='purchaseCard'>
      <Card.Header>{date.toLocaleDateString()}</Card.Header>
      <Card.Body className='purchaseCard-body'>
        <Card.Text>
            <ul>  
                    {products.map((product)=> (
                    <li className='mb-2'>{product.title}</li>))}
               
            </ul>
        </Card.Text>
        <Card.Text className='text-center'>
            <ul>  
                    {products.map((product)=> (
                    <li className='mb-2'>{product.productsInCart.quantity}</li>))}
               
            </ul>
        </Card.Text>
        <Card.Text>
            <ul>  
                    {products.map((product)=> (
                    <li className='text-bold mb-2'>$ {parseInt(product.price)}</li>))}
               
            </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
