import { useState } from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import './addToCartIcon.css'

 const AddToCartIcon = ({ initial = 1, onAdd},props) => {
        const [quantity, setQuantity] = useState(initial)
    
 
    return(
        <button className="carrito" onClick={() => onAdd(quantity)}>
            <p className='carritoCounter'>+</p>
            <ShoppingBagOutlinedIcon fontSize='large' color='info'/>           
        </button>
    )
}
export default AddToCartIcon