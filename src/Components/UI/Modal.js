import React from 'react';
import Card from './Card.js';
import Button from './Button.js';

import classes from './Modal.module.css';

// error window 
const Modal = (props) => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                    {/*<button className={classes.actions} onClick={props.onConfirm}>OK</button> */}
                </footer>
            </Card>
        </div>
    );
};

export default Modal;