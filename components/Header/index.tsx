import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Nav } from "react-bootstrap"
import { BrowserView, MobileView, isMobile } from "react-device-detect";

import Links from "./links";
import * as S from "./styled";

export interface ComponentProps {
  id: string;
}

const Component = React.memo((props: ComponentProps) => {
  const [fixed, setFixed] = useState(false);
  const data = [
    { url: 'services', name: 'serviços' },
    { url: 'contact', name: 'contato' },
  ];

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  const onScroll = () => {
    const $nav = document.getElementById('header');

    if ($nav) {
      const height = $nav.offsetHeight;
      if (window.scrollY > height) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    }
  }


  const goToSection = (event: any, hash: string) => {
    event.preventDefault();
    const element = document.getElementById(hash);
    const height = fixed ? 90 : 200;

    if (element) {
      let scrollHeight = element.offsetTop - height;
      if (isMobile) {
        scrollHeight = element.offsetTop + 20;
      }
      window.scroll({
          top: scrollHeight,
          left: 0,
          behavior: 'smooth'
      });

      // @ts-ignore
      window.dataLayer.push({
        event: "interaction",
        eventActor: "user",
        interactionType: "menu",
        props: {
          type: "header",
          primary: hash, // nome do link
          secondary: " - "
        }
      });
    }
  }

  const image = fixed ? '/images/logo-white.svg' : '/images/logo.svg';
  const colSize = fixed ? 2 : 3;
  return (
    <S.HeaderNavBar fixed={fixed} bsPrefix="header" id={props.id}>
      <Nav defaultActiveKey="#home">
        <S.Header fixed={fixed}>
          <Container>
            <Row>
              <Col xs={{ span: 8, offset: 2}} sm={{ span: 8, offset: 2}} md={{ span: 3, offset: 0}} lg={colSize}>
                <a rel="noopener" href="#banner" onClick={(event) => goToSection(event, "banner")}>
                  <BrowserView>
                    <S.Image src={image} alt="gauge logotipo" />
                  </BrowserView>
                  <MobileView>
                    <S.Image src="/images/logo.svg" alt="gauge logotipo" className="py-3" />
                  </MobileView>
                </a>
              </Col>
              <Col className="align-self-center d-none d-md-block">
                <S.Line />
              </Col>
              <Links data={data} fixed={fixed} goToSection={goToSection} />
            </Row>
          </Container>
        </S.Header>
      </Nav>
    </S.HeaderNavBar>
  );
});

export default Component;
