import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  
  margin: 0 auto;
  width: 80%;
  height: 100%;
  border: solid 1px #000;

  input{
    display:flex;
    width: 500px;
    height: 50px;
    border: solid 1px #656176;
    border-radius: 5px;
    color: #656176;
    font-weight: bold;
    text-align: center;
  }

  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px;

    div{
      display: flex;
      flex-direction: row;
      justify-items: center;

      height: 150px;
      width:300px;
      border-radius: 5px;
      background-color: #FFF;

      div{
        width: 80px;
        height: 80px;
        border: solid 1px #000;
        border-radius: 50px;
      }
      section{
        display: flex;
        flex-direction: column;

        strong{
          font-size: 18px;
          color: #656176;
        }
        span{
          font-weight: bold;
          font-size: 12px;
          color: #656176;
        }
      }
      
    }
  }
`;