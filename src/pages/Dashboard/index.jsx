import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Content from '../../components/content';

class Dashboard extends React.Component{
  render(){
    return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
    )
  }
}

export default Dashboard;