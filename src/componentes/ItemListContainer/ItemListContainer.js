import './ItemListContainer.css'
import Catalogo from '../Catalogo/Catalogo'


const ItemListContainer = () => {
    return(
        <div>
            <div className='row fondo'>
                <div className='col-12'>
                <img
                className="d-block w-100 "
                src='./imagenes/carrusel1.jpg'
                alt="Ihpone 14"
                        />  
                </div>

                <div className='col-12 col-sm-6'>
                    <img
                    className="d-block w-100"
                    src='./imagenes/watch.jpg'
                    alt="Apple Watch Series 8"
                            />
                </div>

                <div className='col-12 col-sm-6'>
                    <img
                    className="d-block w-100 "
                    src='./imagenes/mac-inicio.jpg'
                    alt="Macbook Pro "
                            />
                </div>
                        
                        
                
            </div>

        
            <Catalogo/>
            

            
        </div>   
    )
}

    export default ItemListContainer
