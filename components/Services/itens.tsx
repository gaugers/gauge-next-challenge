import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';

import * as S from "./styled";

const Component = () => {
  const data = [
    {
      title: 'Consulting <br />  service & <br />  strategy',
      subtitle: 'squad de inteligência de mercado.',
      text: 'Estrutura de desenvolvimento de negócios com foco em planejamento estratégico.',
      module: 'Consultoria',
      className: ''
    },
    {
      title: 'Social <br /> Insights & <br /> Content',
      subtitle: 'Informação Relevante para o negócio.',
      text: 'Geração de insights e direcionamento de comunicação para as marcas e produtos.',
      module: 'Social Lab',
      className: 'socialLab'
    },
    {
      title: 'User x <br /> research & <br /> PRODUCT',
      subtitle: 'PESQUISA, ESTUDO DE JORNADA E PRODUTOS.',
      text: 'Engajar o usuário e melhorar a experiência através de testes, dados e análise de comportamento.',
      module: 'PESQUISAS E PRODUTOS',
      className: 'ux'
    },
    {
      title: 'Data <br /> media & <br /> tech',
      subtitle: 'ESTUDAR, DEFINIR, EXECUTAR, APRENDER.',
      text: 'Dados para definir a estratégia, gerar aprendizados e otimizar investimentos.',
      module: 'MESA DE PERFORMANCE',
      className: 'performance'
    }
  ]
  return (
    <>
      <Container>
        <Row>
          {data.map((item : any, i: any) => (
            <Col md="6" lg="3" key={i} className="d-none d-md-block">
              <S.Header className={item.className}>
                  <S.HeaderTitle dangerouslySetInnerHTML={{ __html: item.title }} />
              </S.Header>
              <S.Body>
                  <S.Subtitle>
                    {item.subtitle}
                  </S.Subtitle>
                  <S.Text>
                    {item.text}
                  </S.Text>

                  <S.Divider />
                  <S.Module>
                    {item.module}
                  </S.Module>
              </S.Body>
            </Col>
          ))
          }
        </Row>
      </Container>
      <Row className="d-md-none pb-3">
        <S.Column>
          <S.CarouselContainer
            centered
            infinite
            dots
            itemWidth={300}
            slidesPerPage={2}
          >
            {data.map((item : any, i: any) => (
              <div key={i} className="px-2">
                <S.Header className={item.className}>
                    <S.HeaderTitle dangerouslySetInnerHTML={{ __html: item.title }} />
                </S.Header>
                <S.Body>
                    <S.Subtitle>
                      {item.subtitle}
                    </S.Subtitle>
                    <S.Text>
                      {item.text}
                    </S.Text>

                    <S.Divider />
                    <S.Module>
                      {item.module}
                    </S.Module>
                </S.Body>
              </div>
            ))
            }
          </S.CarouselContainer>
        </S.Column>
      </Row>
    </>
  );
}

export default Component;
