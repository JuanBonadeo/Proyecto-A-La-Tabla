
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import ProductInfo from './ProductInfo'
import './productInfo.css'
import { Loader } from '../Loader/Loader'

const ProductInfoView = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()


    useEffect(() => {
        const productRef = doc(db, 'products', productId)
        setLoading(true)
        getDoc(productRef)
            
            .then(snapshot => {
                const data = snapshot.data()
                const productAdapted = { id: snapshot.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally (() => {
                setLoading(false)
            })
            

    }, [productId])
    if (loading) {
        return <Loader/>
    }

    return(
        <ProductInfo  {...product} />
        
    )
}

export default ProductInfoView