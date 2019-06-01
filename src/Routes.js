import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import Home from './screen/home'
import Drawer  from './components/drawer'
import Login from './screen/login';

export default props => {
  return(
    <Router>

      <Scene key='root' >
    
       <Scene key='Login' component={Login} hideNavBar/>
       
        <Scene key="Drawer" drawer contentComponent={Drawer} hideNavBar>
            
            <Scene key="Home" component={Home} hideNavBar />
    
        </Scene>
    
      </Scene>
      
    </Router>
  );
}


