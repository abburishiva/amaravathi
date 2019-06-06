import React from 'react';
import './BackDrop.css'

const BackDrop = (props) => (
    <div className="BackDrop" onClick={props.modalClose}></div>
);
export default BackDrop;