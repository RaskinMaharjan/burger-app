import React from 'react';
import Aux from '../../hoc/Aux';
import style from '../Layout/Layout.css';

const layout = (props) => (
    <Aux>
        <div> Toolbar, Sidebar, BackDrop</div>
        <main className = {style.Content}>
            {props.children}
        </main>
    </Aux>  
);

export default layout;