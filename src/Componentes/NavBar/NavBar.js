import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget.js";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <NavLink to='/'>
                <h1>Real Store</h1>
            </NavLink>
        <div>
            <ul class="nav">
                <li class="nav-item">
                    <NavLink to={'/category/lineaGolden'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Linea Golden</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to={'/category/lineaCheese'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Linea Cheese</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to={'/category/lineaHomenaje'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Linea Homenaje</NavLink>
                </li>
            </ul>
        </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar;