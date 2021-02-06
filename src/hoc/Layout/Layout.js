import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import style from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state  = {
        showSideDrawer : false
    }

    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer : false});
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) =>{
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return (
            <Aux>

                close
                <Toolbar toggle = {this.sideDrawerToggleHandler}/>
                <SideDrawer open = {this.state.showSideDrawer} closed = {this.closeSideDrawerHandler}/>
                <main className = {style.Content}>
                    {this.props.children}
                </main>
            </Aux>  
        );
    }
}

export default Layout;