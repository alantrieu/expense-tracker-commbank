import { useState } from 'react';
import './NavItem.css';

const NavItem = (props) => {
    // hover state; icons will reveal their titles on hover
    const [hover, setHover] = useState(false);

    const hoverHandler = () => {
        setHover(!hover);
    };

    const clickIconHandler = (event) => {
        props.selectIcon(props.icon, props.title)
    };

    return (
        <div>
            <a href="/#" className="icon-button" onMouseEnter={hoverHandler} onMouseLeave={hoverHandler} onClick={clickIconHandler}>
                {props.icon}
            </a>
            <div className="nav-title__wrapper">
                {hover ? props.title : ''}
            </div>
        </div>
    );
};

export default NavItem;