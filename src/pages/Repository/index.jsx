import React from 'react';

class Repository extends React.Component{
  render(){
    return(
      <h1>{this.props.repository}</h1>
    )
  }
}

export default Repository;