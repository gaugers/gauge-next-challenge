import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import * as S from "./styled";

export interface ComponentProps {
    id: string;
}

const Component = React.memo((props: ComponentProps) => {
  return (
    <S.Section id={props.id}>
      <Container>
        <Row>
          <Col xs="12" sm="12" md="12" lg={{ span: 3, offset: 2 }}>
              <S.Title>
                Clientes
              </S.Title>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="12" lg={{ span: 6, offset: 2 }}>
              <S.Text>
                Empresas, marcas e grupos de diferentes setores que dividem com a gente sua missão de negócio de evolução digital.
              </S.Text>
          </Col>
        </Row>
        <Row className="mt-5 d-none d-md-flex">
          <Col md="4" lg="2" className="text-center align-self-center mb-3 mb-lg-0">
            <S.Img src="/images/clients/abbott.svg" alt="Abbott logotipo" />
          </Col>
          <Col md="4" lg="2" className="text-center align-self-center mb-3 mb-lg-0">
            <S.Img src="/images/clients/ambev.svg" alt="Ambev logotipo" />
          </Col>
          <Col md="4" lg="2" className="text-center align-self-center mb-3 mb-lg-0">
            <S.Img src="/images/clients/embraer.svg" alt="Embraer logotipo" />
          </Col>
          <Col md="4" lg="2" className="text-center align-self-center mb-3 mb-lg-0">
            <S.Img src="/images/clients/gpa.svg" alt="GPA logotipo" />
          </Col>
          <Col md="4" lg="2" className="text-center align-self-center mb-3 mb-lg-0">
            <S.Img src="/images/clients/honda.svg" alt="Honda logotipo" />
          </Col>
          <Col md="4" lg="2" className="text-center align-self-center mb-3 mb-lg-0">
            <S.Img src="/images/clients/itau.svg" alt="Itau logotipo" />
          </Col>
        </Row>
        <S.SecondRow className="d-none d-md-flex">
          <Col md="4" lg="2" className="text-center align-self-center mb-3 mb-lg-0">
            <S.Img src="/images/clients/gol.svg" alt="Gol logotipo" />
          </Col>
          <Col md="4" lg="2" className="text-center align-self-center mb-3 mb-lg-0">
            <S.Img src="/images/clients/nike.svg" alt="Nike logotipo" />
          </Col>
          <Col md="4" lg="2" className="text-center align-self-center mb-3 mb-lg-0">
            <S.Img src="/images/clients/pearson.svg" alt="Pearson logotipo" />
          </Col>
          <Col md="4" lg="2" className="text-center align-self-center mb-3 mb-lg-0">
            <S.Img src="/images/clients/vedacit.svg" alt="Vedacit logotipo" />
          </Col>
          <Col md="4" lg="2" className="text-center align-self-center mb-3 mb-lg-0">
            <S.Img src="/images/clients/vivo.svg" alt="Vivo logotipo" />
          </Col>
          <Col md="4" lg="2" className="text-center align-self-center mb-3 mb-lg-0">
            <S.Img src="/images/clients/xpi.svg" alt="XP Investimentos logotipo" />
          </Col>
        </S.SecondRow>
        <Row className="d-md-none">
          <Col>
            <S.CarouselBlock
              infinite
              arrows
              arrowLeft={<FontAwesomeIcon icon={faAngleLeft} />}
              arrowLeftDisabled={<FontAwesomeIcon icon={faAngleLeft} />}
              arrowRight={<FontAwesomeIcon icon={faAngleRight} />}
              arrowRightDisabled={<FontAwesomeIcon icon={faAngleRight} />}
              addArrowClickHandler
            >
              <img src="/images/clients/abbott.svg" alt="Abbott logotipo" />
              <LazyLoadImage src="/images/clients/ambev.svg" alt="Ambev logotipo" />
              <LazyLoadImage src="/images/clients/embraer.svg" alt="Ambev logotipo" />
              <LazyLoadImage src="/images/clients/gpa.svg" alt="Ambev logotipo" />
              <LazyLoadImage src="/images/clients/honda.svg" alt="Ambev logotipo" />
              <LazyLoadImage src="/images/clients/itau.svg" alt="Ambev logotipo" />
              <LazyLoadImage src="/images/clients/gol.svg" alt="Ambev logotipo" />
              <LazyLoadImage src="/images/clients/nike.svg" alt="Ambev logotipo" />
              <LazyLoadImage src="/images/clients/pearson.svg" alt="Ambev logotipo" />
              <LazyLoadImage src="/images/clients/vedacit.svg" alt="Ambev logotipo" />
              <LazyLoadImage src="/images/clients/vivo.svg" alt="Ambev logotipo" />
              <LazyLoadImage src="/images/clients/xpi.svg" alt="Ambev logotipo" />
            </S.CarouselBlock>
          </Col>
        </Row>
      </Container>
    </S.Section>
  );
});

export default Component;
