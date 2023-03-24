
import { Link } from "react-router-dom"



const ItemDetail = ({data}) => {
    
    return (
       
        <div>
            
            <h2>{data.name}</h2>
            <hr/>
            <img src={data.img} alt={data.name}/>
            <p>{data.description}</p>
            <p>Precio: ${data.price}</p>


        </div>
    )
}

export default ItemDetail
