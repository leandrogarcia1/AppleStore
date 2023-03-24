




const ItemDetail = ({data}) => {
    
    return (
       
        <div>
            
            <h2>{producto.name}</h2>
            <hr/>
            <img src={producto.img} alt={producto.name}/>
            <p>{producto.description}</p>
            <p>Precio: ${producto.price}</p>

           


        </div>
    )
}

export default ItemDetail
