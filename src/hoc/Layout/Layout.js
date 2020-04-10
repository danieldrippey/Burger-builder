import React, { useState } from 'react';
import { connect } from 'react-redux';
import Aux from '../Auxillary/AuxComp';
import styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props =>  {
  const [ sideDrawerIsVisisble, setSideDrawerIsVisisble  ] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisisble(false); 
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisisble(!sideDrawerIsVisisble);
  };

  /* sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });  
  }; */

  return (
    <Aux>
      <Toolbar isAuth={props.isAuthenticated} drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer isAuth={props.isAuthenticated} closed={sideDrawerClosedHandler} open={sideDrawerIsVisisble}/>
      <main className={styles.Content}>
          {props.children}
      </main>
    </Aux>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token != null
  };
};

export default connect(mapStateToProps)(Layout);
