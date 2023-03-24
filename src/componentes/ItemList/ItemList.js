import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemList({data}) {
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
                            <Card.Text>
                            {producto.description}
                            </Card.Text>
                            <Button variant="primary">Mas Informacion </Button>
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
