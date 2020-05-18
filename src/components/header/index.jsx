import React, {Component} from 'react';

import { Div } from './styles';
import {FiGithub} from 'react-icons/fi';

class Header extends Component{
  render(){
    return(
      <Div>
        <FiGithub size={30}/>
        <p>Github app</p>
      </Div>
    )
  }
}

export default Header;