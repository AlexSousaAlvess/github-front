import React, {Component} from 'react';

import {Layout} from 'antd';

const {Content} = Layout;

class ComponentContent extends Component{
  render(){
    return(
      <Content
        style={{
          margin: '0 50px',
          minHeight: '525px'

        }}
      >
        Hello World
      </Content>
    )
  }
}

export default ComponentContent;