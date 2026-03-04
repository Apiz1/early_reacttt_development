import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Shop from './components/Shop'
import Product from './components/Product'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import { ToastContainer, toast } from 'react-toastify';

import Login_test from './components/Admin/Login_test'
import Dashboard from './components/Admin/Dashboard'
import { AdminRequireAuth } from './components/Admin/AdminRequireAuth'
import { AdminAuthProvider } from './components/context/AdminAuth'

import {default as ShowCategories} from './components/Admin/Category/Show'
import {default as CreateCategories} from './components/Admin/Category/Create'
import {default as EditCategories} from './components/Admin/Category/Edit'

import {default as ShowBrands} from './components/Admin/Brand/Show'
import {default as CreateBrands} from './components/Admin/Brand/Create'
import {default as EditBrands} from './components/Admin/Brand/Edit'

import {default as ShowProducts} from './components/Admin/Product/Show'
import {default as CreateProduct} from './components/Admin/Product/Create'
import {default as EditProduct} from './components/Admin/Product/Edit'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AdminAuthProvider>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/Product' element={<Product/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>

            <Route path='/admin/login' element={<Login_test/>}/>
            <Route path='/admin/dashboard' element={
              <AdminRequireAuth>
                <Dashboard />
              </AdminRequireAuth>
            }/>

            <Route path='/admin/categories' element={
              <AdminRequireAuth>
                <ShowCategories/>
              </AdminRequireAuth>
            }/>

            <Route path='/admin/categories/create' element={
              <AdminRequireAuth>
                <CreateCategories/>
              </AdminRequireAuth>
            }/>

            <Route path='/admin/categories/edit/:id' element={
              <AdminRequireAuth>
                <EditCategories/>
              </AdminRequireAuth>
            }/>

            <Route path='/admin/brands' element={
              <AdminRequireAuth>
                <ShowBrands/>
              </AdminRequireAuth>
            }/>

            <Route path='/admin/brands/create' element={
              <AdminRequireAuth>
                <CreateBrands/>
              </AdminRequireAuth>
            }/>

            <Route path='/admin/brands/edit/:id' element={
              <AdminRequireAuth>
                <EditBrands/>
              </AdminRequireAuth>
            }/>

             <Route path='/admin/products' element={
              <AdminRequireAuth>
                <ShowProducts/>
              </AdminRequireAuth>
            }/>

           <Route path='/admin/products/create' element={
              <AdminRequireAuth>
                <CreateProduct/>
              </AdminRequireAuth>
            }/>

           <Route path='/admin/products/edit/:id' element={
              <AdminRequireAuth>
                <EditProduct/>
              </AdminRequireAuth>
            }/>

        </Routes>
      </BrowserRouter>
      <ToastContainer />
      </AdminAuthProvider>
    </>
  )
}

export default App
