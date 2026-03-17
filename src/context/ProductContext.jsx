
import { createContext, useContext, useReducer, useState, useEffect } from 'react';

import { fetchData } from '../Utils/fetch';
import { productReducer } from './reducers/productReducer';


const ProductContext = createContext();
const initialState = {
  allProducts: [], // full product list
  filteredProducts: [] // products after filter/search
};


export const ProductProvider = ({ children }) => {

  const [state, dispatch] = useReducer(productReducer, initialState);
  const [cart , setCart]=useState([])

  const getProducts = async () => {
        const data = await fetchData()  
       dispatch({ type: 'SET_PRODUCTS', payload: data })
        
  }
  useEffect(()=>{
    getProducts()
  },[])
   


  return (
    <ProductContext.Provider value={{ state, dispatch, cart, setCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
