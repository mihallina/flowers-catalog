import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../Pages/Main'
import CategoryPage from'../Pages/CategoryPage'
import AllProductsPage from '../Pages/AllProductsPage'
import CardPage from '../Pages/CardPage'
import AllCategoriesPage from '../Pages/AllCategoriesPage'
import CartPage from '../Pages/CartPage'

export const PagesRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/category/:slug' element={<CategoryPage />} />
        <Route path='/products' element={<AllProductsPage />} />
        <Route path='/product/:id' element={<CardPage />} />
        <Route path='/categories' element={<AllCategoriesPage />} />
        <Route path='/cart' element={<CartPage />} />
    </Routes>
  )
}
//npx json-server --watch db.json --port 4000