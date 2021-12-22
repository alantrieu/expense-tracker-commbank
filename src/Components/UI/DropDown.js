import { useState } from "react";
import './DropDown.css';

const DropDown = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <a href="/#" className='dropdown-button' onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </div>
    );
};

export default DropDown;