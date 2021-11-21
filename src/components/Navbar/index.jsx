import {
    NavLink
}from 'react-router-dom';
import "./styles.css";
import logo from './assets/logo.png'
import whitesearchicon from './assets/whitesearchicon.png'
import notificationBell from './assets/notificationBell.png'
import profilePic from './assets/profilePic.png'
import caret from './assets/caret.png'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                <NavLink exact={true} activeClassName="nav-selected" className="netLogo" to="/">
                    <img src={logo} />
                    </NavLink>
                   
                </li>
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/">
                    Home
                    </NavLink>
                </li>
                <li>
                <NavLink to="" activeClassName="nav-selected">
                  TV Shows
                    </NavLink>
                </li>

                <li>
                <NavLink to="" activeClassName="nav-selected">
                  Movies
                    </NavLink>
                </li>

                <li>
                <NavLink to="" activeClassName="nav-selected">
                  New & Popular
                    </NavLink>
                </li>

                <li>
                <NavLink to="/new" activeClassName="nav-selected">
                  My List
                    </NavLink>
                </li>
                <li>
                <NavLink to="" activeClassName="fromSearch" className="rightLogos">
                <img src={whitesearchicon} />
                    </NavLink>
                </li>

                <li>
                <NavLink to="" activeClassName="nav-selected" className="rightLogos">
                <img src={notificationBell} />
                    </NavLink>
                </li>

                <li>
                <NavLink to="" activeClassName="tog" className="rightLogos">
                <img src={profilePic} />
                    </NavLink>
                </li>

                <li>
                <NavLink to="" activeClassName="tog" className="rightLogos">
                <img src={caret} />
                    </NavLink>
                </li>

                
            </ul>
        </nav>
    )
}