import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, doc, getDocs, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import ProductInfo from './ProductInfo'
import './productInfo.css'
import { Loader } from '../Loader/Loader'

const ProductInfoView = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const [otherProducts, setOtherProducts] = useState()
    const { productId } = useParams()


    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
    
            // Obtén el producto actual
            const productSnapshot = await getDoc(doc(db, 'products', productId));
            const data = productSnapshot.data();
            const productAdapted = { id: productSnapshot.id, ...data };
            setProduct(productAdapted);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, [productId]);
    if (loading) {
        return <Loader/>
    }

    return(
        <ProductInfo  {...product} />
        
    )
}

export default ProductInfoView