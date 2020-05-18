import React from 'react';

import Header from '../../components/header';
// import Footer from '../../components/footer';

const datas = [
  {
    id: 0,
    title: "Facebook",
    description: "We are working to build community through open source technology. NB: members must have two-factor auth."
  },
  {
    id: 1,
    title: "facebook / react",
    description: "A declarative, efficient, and flexible JavaScript library for building user interfaces."
  },
  {
    id: 2,
    title: "vuejs",
    description: "Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web."
  },
  {
    id: 3,
    title: "Angular",
    description: "One framework. Mobile & desktop."
  },
  {
    id: 4,
    title: "Node.js",
    description: "Node.js JavaScript runtime"
  }
]

class Dashboard extends React.Component{
  render(){
    return (
      <>
      <Header />
      <h1>Dashboard</h1>
      </>
    )
  }
}

export default Dashboard;