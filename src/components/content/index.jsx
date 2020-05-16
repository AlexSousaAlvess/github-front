import React, {Component} from 'react';

import Card from '../card';

import {Layout} from 'antd';

const {Content} = Layout;

class ComponentContent extends Component{
  render(){
    return(
      <Content
        style={{
          paddingTop: '20px',
          minHeight: '525px',
          background: '#ECECEC',
        }}
      >
        <Card/>
      </Content>
    )
  }
}

export default ComponentContent;