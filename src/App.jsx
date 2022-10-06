import '../src/assets/CSS/index.css'
import {HashRouter, Route, Routes} from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen'
import MonNavbar from './components/MonNavbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import Purchases from './pages/Purchases'
import MonFooter from './components/MonFooter'
import { setProductsThunk } from './store/slices/products.slice'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import User from './pages/User'
import ProtectedRoutes from './components/ProtectedRoutes'
function App() {
  const isLoading = useSelector((state) => state.isLoading)

  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(setProductsThunk())

  },[])

  return (
    <div>
      <HashRouter>
        
        <MonNavbar className='MonNavbar'/>
        {isLoading && <LoadingScreen/>}

          <Routes>
            <Route path='/' element={<Home/> }/>
            <Route path='/product/:id' element={<Product/>}/>
            <Route path='/login' element={<Login/>}/>

            <Route element={<ProtectedRoutes/>}>
              <Route path='/purchases' element={<Purchases/>}/>
              <Route path='/user' element={<User/>}/>

            </Route>

          </Routes>

        <MonFooter/>

      </HashRouter>
    </div>
  )
}

export default App
