import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  
  margin: 0 auto;
  width: 80%;
  height: 100%;
`;

export const Search = styled.input`
  display:flex;
  width: 500px;
  height: 50px;
  border: solid 1px #656176;
  border-radius: 5px;
  color: #656176;
  font-weight: bold;
  text-align: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;

  width: 500px;
  height: 100px;
  background: #fff;
  border-radius: 5px;
  margin: 10px;
  padding: 0 5px;

  strong{
    color: #656176;
    margin-bottom: 10px;
  }
  
  p{
    color: #656176;
  }

  svg{
    margin-left: 20px;
    cursor: pointer;
  }
`;
