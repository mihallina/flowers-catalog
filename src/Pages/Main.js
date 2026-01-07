import { useEffect } from 'react';
import NewCategorys from '../components/main/NewCategorys';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {fetchProducts} from "../redux/productsActions";
import Layout from '../components/layout/Layout';
import PopularCategorys from '../components/main/PopularCategorys';
import PopularProducts from '../components/main/PopularProducts';

function Main() {
  const dispatch = useAppDispatch();
  const {status} = useAppSelector(state => state.products);

  useEffect(() => {
    if(status === 'idle'){
      dispatch(fetchProducts());
    }
  }, [dispatch, status])

  return (
    <>
        <Layout>
          <NewCategorys />
          <PopularCategorys />
          <PopularProducts />
        </Layout>
    </>
  );
}

export default Main;