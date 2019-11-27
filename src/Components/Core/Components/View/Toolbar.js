import './style/Toolbar.css';
import React from 'react';

const Toolbar = (props) => {
    return (<div className={props.type}>
        {props.children}
    </div>);
};

export default Toolbar;