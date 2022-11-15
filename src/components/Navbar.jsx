import { NavLink } from "react-router-dom"
import "../App.css"

const Navbar= ()=>{

const setActive =({isActive})=>isActive ? "active" : undefined

return (
    <header>
        <h3>Pokedex</h3>

        <nav className="navegar">
            <NavLink  to="/"  className={setActive}end>Home</NavLink>
            <NavLink to="/pokemones" className={setActive}>Pokemones</NavLink>
        </nav>
    </header>
)
    
}





export default Navbar