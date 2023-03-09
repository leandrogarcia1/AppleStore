
import { FaShoppingCart } from "react-icons/fa";
import './CarWidget.css'

const CarWidget = ()=> {

    return(
        <div className="cart-widget">
            <FaShoppingCart className="cart-icon" />
            <span>0</span>
        </div>
    )
}

export default CarWidget