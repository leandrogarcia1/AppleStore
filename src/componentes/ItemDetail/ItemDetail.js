
import { Link } from "react-router-dom"



const ItemDetail = ({item}) => {
    
    return (
       
        <div>
            
            <h2>{item.name}</h2>
            <hr/>
            <img src={item.img} alt={item.name}/>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>


        </div>
    )
}

export default ItemDetail
