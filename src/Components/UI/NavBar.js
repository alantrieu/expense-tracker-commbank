import { useState } from "react";
import './NavBar.css';

const NavBar = (props) => {
    return (
        <nav className='navbar'>
            <ul className='navbar-nav'>{props.children}</ul>
        </nav>
    )
};

// should extract to new js file navitem.js?
const NavItem = (props) => {
    // const [open, setOpen] = useState(false);
    // return (
    //     <li className='nav-item'>
    //         <a href="#" className='icon-button' onClick={() => setOpen(!open)}>
    //             {props.icon}
    //         </a>
    //         {open && props.children}
    //     </li>
    // )

    const mouseEnterHandler = () => {
        return (
            <div>
                {props.title}
            </div>
        );
    };

    return (
        <div>
            <a href="/#" className="icon-button">
                {props.icon}
            </a>
            <div className="nav-item__title" onMouseEnter={mouseEnterHandler}>
                {props.title}
            </div>
        </div>
    );
};

// export default NavBar;
export {NavBar, NavItem};