
import {NavLink} from 'react-router-dom';
import './HeaderMenu';
function HeaderMenu(){
    return(
        <header>
            <nav>
                <span className='logo'>MyHotel</span>
                <ul>
                    <li>
                        <NavLink to="Idly">Idly </NavLink>
                    </li>
                     <li>
                        <NavLink to="Dosa ">Dosa </NavLink>
                    </li>
                     <li>
                        <NavLink to="Puri">Puri </NavLink>
                    </li>
                     <li>
                        <NavLink to="Vada">Vada</NavLink>
                    </li>
                    <li>
                        <NavLink to="Upma">Upma</NavLink>
                    </li>
                    <li>
                        <NavLink to="chapathi">chapathi</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default HeaderMenu;
