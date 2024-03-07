import { useState } from 'react'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';import './addToCartIcon.css'

 const AddToCartIcon = ({ initial = 1, onAdd},props) => {
        const [quantity, setQuantity] = useState(initial)
    
 
    return(
        <button className="carrito" onClick={() => onAdd(quantity)}>
            <AddShoppingCartRoundedIcon  color='info'/>           
        </button>
    )
}
export default AddToCartIcon