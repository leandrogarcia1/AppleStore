import productos from "../Productos/Productos.json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CatalogoCategoria(props) {
    const { category } = props;
  
    const productosFiltrados = productos.filter(
      (producto) => producto.categoria === category
    );
  
    return (
      <div>
        <h1>Catálogo de productos - Categoría: {category}</h1>
        <ul key={productos.id}>
                <div className="col-6">
                           <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={productos.img} alt={productos.name}/>
                          <Card.Body>
                            <Card.Title>{productos.name}</Card.Title>
                            <p>Precio: $ {productos.price} USD</p>
                            <Card.Text>
                            {productos.description}
                            </Card.Text>
                            <Button variant="primary">Mas Informacion </Button>
                          </Card.Body>
                        </Card>
                  </div>
              </ul>
      </div>
    );
  }

  export default CatalogoCategoria