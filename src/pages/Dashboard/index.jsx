import React from 'react';

import Header from '../../components/header';
// import Footer from '../../components/footer';

import { FiTrash2, FiArrowRight } from 'react-icons/fi';

import api from '../../services';

import { Container, Search, Card } from './styles';

class DashboardComponent extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Container>
          <Search
            placeholder='digite aqui'
          />
          <Card>
            <div
              style={{
                margin: 10,
                width: 400
              }}
            >
              <strong>Card01</strong>
              <p>Descrição01</p>
            </div>
            <div
              style={{
                width: 100,
                margin: 'auto'
              }}
            >
              <FiTrash2
                size={20}
                color="#656176"
                onClick={() => console.log("Deletar")}
              />
              <FiArrowRight
                size={20}
                color="#656176"
                onClick={() => console.log("Proximo")}
              />
            </div>
          </Card>
        </Container>
        {/* <Footer /> */}
      </>
    )
  }
}

export default DashboardComponent;