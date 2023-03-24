import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = ()=> {

    return(
        <div className='footer'>
            <div className="row ">
                <div className="col-12 col-sm-4 ">
                    <h4 ><strong>Apple Store-Tucuman </strong> </h4>
                    
                    <img src='../imagenes/pngwing.com.png' className="logo" alt='logo'/>
                    
                    
                </div>
                <div className="col-12 col-sm-4">
                <h6>Nuestro productos</h6>
                < Link  to='/'  className='link-nav'  >Watch </Link>
                <hr/>
              
                < Link  to='/'  className='link-nav'  > Iphone </Link>
                <hr/>
                < Link  to='/'  className='link-nav'  >Mac </Link>
                </div>
                <div className="col-12 col-sm-4">
                <h6>Contacto</h6>
                <p>Av Santa Fe 3490, San Miguel de Tucuman. T4000</p>
                </div>
            </div>
        </div>
    )
}

export default Footer