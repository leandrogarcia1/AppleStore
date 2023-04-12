import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import context from 'react-bootstrap/esm/AccordionContext';
import { Link } from 'react-router-dom'
import { MyContexto } from '../../contexto/Mycontext';

function ItemList({data}) {

    const contexto=useContext(MyContexto)
    console.log(contexto)


    return (
      <div>

        <h1>Catálogo de productos</h1>
        
        <ul className="d-flex justify-content-around align-items-center flex-wrap">
          {data.map((producto) => (
             <ul key={producto.id}>
                <div >
                           <Card style={{ width: '18rem'}}>
                          <Card.Img variant="top" src={producto.img} alt={producto.name}/>
                          <Card.Body>
                            <Card.Title>{producto.name}</Card.Title>
                            <p>Precio: $ {producto.price} USD</p>
                            
                            < Link  to={`/detail/${producto.id}`}>Mas Informacion  </Link>
                          </Card.Body>
                        </Card>
                  </div>
              </ul>
          ))}
        </ul>
      </div>
    );
  }

  export default ItemList
