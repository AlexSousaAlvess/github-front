import React, {Component} from 'react';

import {Input} from 'antd';

const {Search} = Input;

class ComponentSearch extends Component{
  render(){
    return(
      <Search
        placeholder="Digite aqui"
        onSearch={value => console.log(value)}
        style={{ 
          width: 300,
          margin: 20,
        }}
      />
    )
  }
}

export default ComponentSearch;