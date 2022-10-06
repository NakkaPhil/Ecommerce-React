import React, {useState ,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom';
import LoadingScreen from './LoadingScreen';

export default function ProductCard({product}) {

    const navigate = useNavigate()
    const [id, setId] = useState()
    useEffect(()=>{
        setId(product.id)
    },[])
    
    const checkProduct = (id)=> {
        navigate(`/product/${id}/`)
    }
    return (
        <Card style={{ width: '18rem' }} onClick={()=> checkProduct(product.id)} >
            <div className="img-container">
                <Card.Img variant="top" src={product.productImgs[0]} alt="product-img"/>
            </div>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <div className="productPrice">
                    <Card.Text> <span style={{fontWeight: '700'}}>Price:</span> $ {product.price}</Card.Text>
                    <Button variant="primary">
                    <i 
                    className='bx bx-cart' 
                    style={
                        {
                            color:'#fffbfb',
                            fontSize: '24px'
                        }}></i>
                    </Button>
                </div>
            </Card.Body>
        </Card>
  )
}
