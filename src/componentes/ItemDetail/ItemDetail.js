
import './ItemDetail.css'



const ItemDetail = ({data}) => {
    
    return (
       
        <div className="ItemDetail">
            
            <h2>{data.name}</h2>
            <hr/>
            <img src={data.img} alt={data.name}/>
            <h3>Informacion :</h3>
            <p>{data.description}</p>
            <p><strong>Stock Disponible: </strong>{data.stock}</p>
            <p><strong>Precio: </strong> ${data.price}</p>


        </div>
    )
}

export default ItemDetail
