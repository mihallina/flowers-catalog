import { useEffect } from 'react';
import {Header} from '../components/Header';
import NewCategorys from '../components/NewCategorys';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {fetchProducts} from "../redux/productsActions";

function Main() {
  const dispatch = useAppDispatch();
  const {status} = useAppSelector(state => state.products);

  useEffect(() => {
    if(status === 'idle'){
      dispatch(fetchProducts());
    }
  }, [dispatch, status])

  return (
    <div>
        <Header />
        <NewCategorys />
    </div>
  );
}

export default Main;