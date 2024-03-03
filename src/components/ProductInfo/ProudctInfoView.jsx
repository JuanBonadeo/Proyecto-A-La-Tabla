
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import ProductInfo from './ProductInfo'
import './productInfo.css'

const ProductInfoView = () => {
    const [product, setProduct] = useState()

    const { productId } = useParams()


    useEffect(() => {
        const productRef = doc(db, 'products', productId)

        getDoc(productRef)
            .then(snapshot => {
                const data = snapshot.data()
                const productAdapted = { id: snapshot.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            

    }, [productId])


    return(
        <ProductInfo  {...product} />
        
    )
}

export default ProductInfoView