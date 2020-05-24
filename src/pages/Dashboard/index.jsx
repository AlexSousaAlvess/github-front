import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';

import {Section} from './styles';

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

class DashboardComponent extends React.Component{
  render(){
    return (
      <>
      <Header />
      <Section>
        <input
          placeholder='digite aqui'
        />
        <div>
          <div
            style={{
              webkitBoxShadow: '0px 5px 5px 0px rgba(0,0,0,0.75)',
              mozBoxShadow: '0px 5px 5px 0px rgba(0,0,0,0.75)',
              boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.75)',
            }}
          >
            <div></div>
            <section>
              <strong>Card01</strong>
              <span>Descrição01</span>
            </section>
          </div>
        </div>
      </Section>
      {/* <Footer /> */}
      </>
    )
  }
}

export default DashboardComponent;