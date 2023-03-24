import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import WatchSeries8 from "../Detalle/WachSeries8"
import { Link } from 'react-router-dom'


const WatchCards = () => {
    return (
        <div>
            
            <div className='row'>
                    <div className='col-12 col-md-4'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./imagenes/watch-series-8.png" />
                            <Card.Body>
                                <Card.Title>Apple Watch Series 8</Card.Title>
                                
                                <Button variant="primary"><Link  to='/WatchSeries8' className=''>Conoce Mas </Link></Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-12 col-md-4'>
                        <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./imagenes/watch-series-SE.png" />
                                <Card.Body>
                                    <Card.Title>Apple Watch SE</Card.Title>
                                    
                                    <Button variant="primary">Conoce Mas</Button>
                                </Card.Body>
                         </Card>
                    </div>
                    <div className='col-12 col-md-4'>
                        <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./imagenes/watch-series-ultra.png" />
                                <Card.Body>
                                    <Card.Title>Apple Watch Ultra</Card.Title>
                                    
                                    <Button variant="primary">Conoce Mas</Button>
                                </Card.Body>
                         </Card>
                    </div>
            </div>
           

            

        </div>
    )
}

export default WatchCards