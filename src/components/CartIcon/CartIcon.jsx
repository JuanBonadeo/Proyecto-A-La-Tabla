import './cartIcon.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const CartIcon = (prop) => {
    const useCart = () => {
        return useContext(CartContext)
    }
    const { totalQuantity } = useCart();
    return(
        <>
        <Link  to='/carrito' className='link'>
            <button to="" className={`carrito ${prop.className}`}>
                <p className='carritoCounter'>{totalQuantity}</p>
                <ShoppingCartOutlinedIcon fontSize='large' color='info'/>   
            </button>
        </Link>
        </> 
    )
}
export default CartIcon