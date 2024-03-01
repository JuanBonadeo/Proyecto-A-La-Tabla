import '../Cart/cart.css'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


const Cart = (prop) => {
    return(
        <>
            <button className={`carrito ${prop.className}`}>
                <p className='carritoCounter'>0</p>
                <ShoppingBagOutlinedIcon fontSize='large' color='info'/>   
            </button>
        </> 
    )
}
export default Cart