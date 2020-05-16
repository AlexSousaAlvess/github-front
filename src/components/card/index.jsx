import React, {Component} from 'react';

import {Card} from 'antd';

import {DeleteOutlined, ArrowRightOutlined} from '@ant-design/icons';

class ComponentCard extends Component{
  render(){
    return(
      <Card
        title="Card title"
        bordered={true}
        style={{
          width:300,
          marginLeft: '20px',
        }}
        actions={[
          <DeleteOutlined />,
          <ArrowRightOutlined />
        ]}

      >
        <p>Descrição</p>
      </Card>
    )
  }
}

export default ComponentCard;