import React , {Component} from 'react';

import {Layout} from 'antd';

const {Footer} = Layout;

// import {} from './styles';

class ComponentFooter extends Component{
  render(){
    return(
      <Footer style={{textAlign: 'center'}}>
        Github - ©2020 Created by Alex
      </Footer>
    )
  }
}

export default ComponentFooter;