import React from 'react';
import style from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className = {style.Toolbar}>
        <DrawerToggle clicked = {props.toggle} />
        <Logo/>
        <nav className= {style.DesktopOnly}>
        <NavigationItems/>
        </nav>
        
    </header>
);

export default toolbar;