import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import MonInput from '../components/MonInput'
import ProductCard from '../components/ProductCard'
import FilterCards from '../components/FilterCards'
import { setProducts, setProductsThunk } from '../store/slices/products.slice'

export default function Home() {
  const isLoading = useSelector((state) => state.isLoading)
  const products = useSelector((state) => state.products)
  const [productsFiltered, setProductsFiltered] = useState([])
  const dispach = useDispatch()

  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState([])
  
  //Setting categories
  useEffect(()=>{
    axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
    .then(res => setCategories(res.data.data.categories))
    
  },[])

  useEffect(()=>{
    setProductsFiltered(products)
  },[products])
  
  const getByCategory = (categoryProp)=> {
    const filtered = products.filter((product)=> (product.category.name == categoryProp))
    
    setProductsFiltered(filtered)
    
  }

  const getByName = (nameProp)=> {
    const name = nameProp.split(' ')
    
    const filtered = products.filter((product) => {
      const nameProduct = product.title.split(' ')[0]
      if(nameProduct == name[0]) return product
    })
    //console.log(filtered)
    setProductsFiltered(filtered)
  }
  
  return (
    <div className='homeContent'>
        <aside className='filter'>
          <FilterCards 
            filter={getByCategory}
            categories={categories}
          />
        </aside>
        <section className='main-content'>
          <MonInput 
          getByName = {getByName}
          />
          <div className="productsList">
          {productsFiltered.map((product)=>(
            <ProductCard product={product} key={product.id}/>
          ))}
        </div>
          
        </section>
    </div>
  )
}
