import React from 'react';
import loadable from '@loadable/component'

import { Container, Row, Col } from 'react-bootstrap';

import * as S from "./styled";
const Itens = loadable(() => import('./itens'))

export interface ComponentProps {
    id: string;
}


const Component = React.memo((props: ComponentProps) => {
  return (
    <S.Section id={props.id}>
      <Container>
        <Row>
          <Col sm="12" md="12" lg={{ span: 10, offset: 2 }}>
            <S.Title>
              Digital Services
            </S.Title>
          </Col>
        </Row>
      </Container>
      <Itens />
      <Container>
        <Row>
          <Col md="6" lg="4">
            <S.DivRelative>
              <S.PointBg src="/images/point-bg.png" alt="gauge dotted background image" />
            </S.DivRelative>
          </Col>
        </Row>
        <S.FooterRow>
          <Col xs="8" sm="10" md="10" className="align-self-center pr-0">
            <S.Footer />
          </Col>
          <Col xs="2" sm="1" md="1" className="text-right pl-md-0 pr-0 pr-md-1">
            <S.Circle src="/images/digita-services/circulo.svg" alt="gauge circle icon background image" />
          </Col>
          <Col xs="2" sm="1" md="1" className="align-self-center">
            <S.Footer />
          </Col>
        </S.FooterRow>
      </Container>
    </S.Section>
  );
});

export default Component;
