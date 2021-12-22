import { useState } from "react";
import './DropDown.css';

const DropDown = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <a href="/#" className='dropdown-button' onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            <div onClick={() => setOpen(false)}>
                {open && props.children}
            </div>
        </div>
    );
};

export default DropDown;