import React from 'react';
import { Container, Row, Col } from "react-bootstrap"

import Services from '../Services';
import * as S from "./styled";

export interface ComponentProps {
    id: string;
}


const Component = React.memo((props: ComponentProps) => {

  return (
    <S.Section id={props.id}>
      <Container>
        <Row>
          <S.TitleBlock sm="12" md="12" lg={{ span: 7, offset: 2 }}>
            <S.Title>
              marketing <br />
              <span>meets</span> <br />
              tech
            </S.Title>
            <S.TechBlock className="col-3 col-lg-4" />
          </S.TitleBlock>
        </Row>
      </Container>
      <S.BlockCircleBg>
        <Container className="pb-50">
          <Row>
            <Col sm="12" md="12" lg={{ span: 6, offset: 2 }}>
              <S.Subtitle>
                Trabalhamos na intersecção do marketing e tecnologia.
              </S.Subtitle>
            </Col>
          </Row>

          <Row>
            <Col sm="12" md="12" lg={{ span: 6, offset: 2 }} className="mt-2">
              <S.Text>
                De consultoria de estratégia de mercado à operação de analytics, mídia, e comunicação, com foco em pesquisa e experiência do usuário.
              </S.Text>
              <S.Text>
                Usamos a inteligência dos dados para potencializar negócios, conectar pessoas e criar experiências.
              </S.Text>
            </Col>
          </Row>
        </Container>

        <Services id="services" />
      </S.BlockCircleBg>
    </S.Section>
  );
});

export default Component;
