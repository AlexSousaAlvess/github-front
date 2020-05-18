import React from 'react';

import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;

  background-color: #dbedfe;
  p{
    color: #000;
    font-weight: bold;
    font-size: 18px;
  }
  
`;