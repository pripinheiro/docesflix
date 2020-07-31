 import styled from 'styled-components';

export const BannerMainContainer = styled.section`
  height: 80vh;
  color: var(--white);
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
  background-size: cover;
  background-position: center;
  
  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;

export const ContentAreaContainer = styled.section`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin-left: 5%;
  margin-right: 5%;
  

  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  width: 50%;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Category = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  display: inline-block; 
  padding: 25px;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    display: none;
    font-size: 18px;
    padding: 10px;
  }
`;

ContentAreaContainer.Description = styled.p`

  @media (max-width: 800px) {
    display: none;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-size: 40px;
  font-weight: 300;
  font-style: normal;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 32px;

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const WatchButton = styled.button`
  background-color: var(--white);
  border: 0;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  color: var(--black);
  display: none;

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  outline: none;
  padding: 16px 24px;
  
  
  @media (max-width: 800px) {
    display: block;
  }
`;