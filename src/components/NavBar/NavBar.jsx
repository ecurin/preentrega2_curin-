import { Link, NavLink } from "react-router-dom"
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'

function NavBar(){
    return (
     
     <nav className="navbar navbar-expand-lg fixed-top">
     
     <div className="container-fluid">
         {<Link to='/'><Logo /></Link>}
         
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-1 mb-lg-0">
             <li className="btn">
             {<Link to='/'>Inicio</Link>}
             </li>
             <li className="nav-item dropdown">
             <a className="btn nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Tablas</a>
                    <ul className="dropdown-menu"> 
                        <li>{<Link to="/list/asado"     className="btn">Asado</Link>}</li>
                        <li>{<Link to="/list/cocina"    className="btn" >Cocina</Link>}</li>
                        <li>{<Link to="/list/cocktail"  className="btn">Aperitivo</Link>}</li>
                        <li>{<Link to="/list"           className="btn">Todos</Link>}</li>
                    </ul>
             </li>
             <li className="btn">
             {<Link to='/contacto'>Contáctanos</Link>} 
             </li>
         </ul>
         </div>
     </div>
     <CartWidget />
     </nav>

    )
  }
  
  export default NavBar
