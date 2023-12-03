import React from 'react';
import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 18vw;
  border: 2px solid rgba(123, 74, 226, 0.50);
  border-radius: 10px;
  padding: 16px;

  @media (max-width: 800px){
        width: 65vw;
    }
`;

export const CardImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: 20vh;
  border-radius: 10px;
`;

export const CardTitle = styled.h3`
  padding: 16px;
  font-size: 1.125rem;
  color: white;
  font-family: 'Raleway', sans-serif;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: 'Raleway', sans-serif;
`;

export const Button = styled.a`
  text-decoration: none;
  text-align: center;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    font-weight: 700;
    background-color: rgba(123, 74, 226, 0.50);
  }
`;