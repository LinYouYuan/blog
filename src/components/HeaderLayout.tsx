import * as React from 'react';
import styled from 'styled-components';
import HeaderImg from '../assets/images/header-bg.jpg'
import Navigation from './Navigation';

class HeaderLayout extends React.Component {
  render() {
    return (
      <Header imgSrc={HeaderImg}>
        <Navigation />
        <HeaderContainer>
          <Title>Dayuan's Blog.</Title>
          <Remark>it's better to burn out than to fade away</Remark>
        </HeaderContainer>
      </Header>
    )
  }
}

interface IHeader {
  imgSrc: string;
}

const Header = styled.header`
  position: relative;
  background: no-repeat center center;
  background-image: url(${(props: IHeader) => props.imgSrc});
  background-color: #666;
  width: 100%;
  background-attachment: scroll;
  text-shadow: 3px 3px 10px #000;
  background-size: cover;
`

const HeaderContainer = styled.div`
  position: relative;
  max-width: 1000px;
  padding: 80px 0 300px;
  margin: 0 auto;
  text-align: center;
`

const Title = styled.h1`
  font-size: 70px;
  line-height: 1.1;
  font-weight: 700;
  color: #fff;
`

const Remark = styled.span`
  font-size: 18px;
  color: #fff;
  line-height: 1.1;
  letter-spacing: 3px;
  display: block;
  font-style: italic;
  font-weight: 100;
  margin: 10px 0 0;
`

export default HeaderLayout
