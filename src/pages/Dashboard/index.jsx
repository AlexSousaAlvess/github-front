import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';

import api from '../../services';

import {Section} from './styles';

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
              <span>Detalhes</span>
              <span>Deletar</span>
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