
import CarWidget from '../CarWidget/CarWidget'
import './Navbar.css'

export const Navbar=()=>{
    return(
        <header className="header">
            <div className="header_container">
                
                <img src='./imagenes/pngwing.com.png' className="header_logo" alt='logo'/>
                <nav className="navbar">
                    <p className="navbar_link">Mac</p>
                    <p className="navbar_link">Iphone</p>
                    <p className="navbar_link">Ipad</p>
                    <p className="navbar_link">Watch</p>
                    
                </nav>
                <CarWidget/>
            </div>
        </header>
    )
}

