
import './ItemListContainer.css'
import { Button } from 'react-bootstrap'

const ItemListContainer = ({greeting}) => {
    return(
        
        <div className='container my-5'>
            <h2 className="List_Container_titulo">Somos Tu tienda de Confianza</h2>
            <hr/>

            <p>{greeting}</p>
            <button className='btn btn-primary'>click me</button>
            <Button >click me</Button>
        </div>
    )
}

export default ItemListContainer