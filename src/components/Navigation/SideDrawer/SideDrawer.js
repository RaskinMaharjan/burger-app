import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import style from './SideDrawer.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = props => {

    let attachedClasses = [style.SideDrawer, style.Close];
    if(props.open){
        attachedClasses = [style.SideDrawer, style.Open];
    }
    return(
        <Aux>
        <BackDrop show={props.open}  clicked = {props.closed}/>
        <div className = {attachedClasses.join(" ")}>
            <div className = {style.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>

        </div>
    </Aux>
    );
    };

export default sideDrawer;