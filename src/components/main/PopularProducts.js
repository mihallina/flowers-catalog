import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fetchProducts } from '../../redux/productsActions'
import ProductCard from '../categoryPage/ProductCard'
import './PopularProducts.css'
import { Link } from 'react-router-dom'

const PopularProducts = () => {
    const dispatch = useAppDispatch();
    const {products, status} = useAppSelector(state => state.products);

    useEffect(() => {
        if(status !== 'succeeded'){
            dispatch(fetchProducts());
        }
    }, [status, dispatch])

    if(status !== 'succeeded') {
        return <div className='container'>Загрузка популярных товаров...</div>
    }

    const productsData = products.slice(55, 66);

  return (
    <div className='container popularProducts'>
        <h1>Популярные товары</h1>

        <div className='popularProducts-wrapper'>
            {productsData.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
            <Link to='/products' className="popularCard-all">Все товары</Link>
        </div>
    </div>
  )
}

export default PopularProducts