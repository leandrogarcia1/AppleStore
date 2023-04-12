import { useState } from "react"

const ItemCount = ({max,data}) => {
    const [cantidad, setCantidad] = useState(1)
    const handleRestar = () => {
       cantidad>1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max &&  setCantidad(cantidad + 1)
    }

    const handleAgregar = () => {
        const dataToAdd = {
            ...data,
            cantidad
        }
        console.log(dataToAdd)
    }
    
    return (
        <div>
           <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
           <span className="mx-3">{cantidad}</span>
           <button onClick={handleSumar} className="btn btn-outline-primary">+</button>

           <br/>

            <button onClick={handleAgregar}  className="btn btn-success m-3">Agregar al carrito</button> 
        </div>

        
    )
}

export default ItemCount