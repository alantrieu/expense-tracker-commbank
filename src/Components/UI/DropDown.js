import { useState } from "react";
import './DropDown.css';

const DropDown = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <li>
            <a href="/#" className='dropdown-button' onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    );
};

export default DropDown;