import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../Pages/Main'

export const PagesRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Main />} />
        {/* <Route path='/category/:slug' element={<CategoryPage />} /> */}
        {/* <Route path='/cart' element={<CartPage />} /> */}
    </Routes>
  )
}
//npx json-server --watch db.json --port 4000