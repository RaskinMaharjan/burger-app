import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import style from '../Layout/Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

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