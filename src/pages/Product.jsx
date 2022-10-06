import React, { useEffect } from 'react'
import {useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { setProductThunk } from '../store/slices/product.slice';
import ProductInfo from '../components/ProductInfo';
import ImagesCarousel from '../components/ImagesCarousel';
import ProductCard from '../components/ProductCard';

export default function Product() {
  const id = useParams()
  const dispach = useDispatch()
  const navigate = useNavigate()
  
  useEffect(()=>{
    dispach(setProductThunk(id))
  },[id])
  const products = useSelector(state => state.products)
  const product = useSelector(state => state.product)

  const cat = product.category;
  const relatedProducts = products.filter((product) => product.category.name === cat)


  return (
    <div>
      <div className='product-main-container'>
          <ImagesCarousel images={product.productImgs}/>
          <ProductInfo product={product}/>
      </div>
      <div className="related-articles">
          <h3>Discover similar items</h3>
            <div className="productsListRelated">
              {relatedProducts.map((product)=>(
                <ProductCard product={product} key={product.id}/>
              ))}
          </div>
        </div>
    </div>
  )
}
