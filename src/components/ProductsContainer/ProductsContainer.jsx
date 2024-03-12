import React from 'react'
import { useEffect, useState } from 'react'
import './productsContainer.css'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import ProductList from './ProductList'
import { Loader } from '../Loader/Loader'




export default function ProductsContainer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const fetchProducts = async () => {
    setLoading(true)
    try {
      const productsRef = collection(db, 'products');
      const snapShot = await getDocs(productsRef);
      const productosAdapted = snapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productosAdapted);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <Loader/>;
  }
  return (
      <ProductList products={products} />
  )
}
