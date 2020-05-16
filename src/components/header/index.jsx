import React, { Component } from 'react';

import { PageHeader } from 'antd';

// import {Container} from './styles';

import 'antd/dist/antd.css';


class Header extends Component{
  render(){
    return(
      <>
        <PageHeader
          style={{
            border: '1px solid rgb(235, 237, 240)',
          }}
          title="Github App"
          subTitle="desafio"
        />
      </>
    )
  }
}

export default Header;