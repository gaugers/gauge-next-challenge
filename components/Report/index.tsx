import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { isMobile } from "react-device-detect";

import * as S from "./styled";

export interface ComponentProps {
    id: string;
}

const Component = React.memo((props: ComponentProps) => {

  useEffect(() => {
    if (window.location.hash === '#reports') {
      setTimeout(() => {
        const element = document.getElementById('report');

        if (element) {
          let scrollHeight = element.offsetTop - 250;
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
              primary: 'report', // nome do link
              secondary: " - "
            }
          });
        }

      }, 1000);
    }
  }, []);

  const buttonAction = (file: string) => {
    // @ts-ignore
    window.dataLayer.push({
      event: "interaction",
      eventActor: "user",
      interactionType: "linkClick",
      props: {
        type: "cta",
        file: file,
        title: "Faça download do PDF" // nome do link
      }
    });

    const link = document.createElement('a');
    //@ts-ignore
    link.href = `/reports/${file}`;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div id={props.id}>
      <Container>
        <Row>
          <Col xs="12" sm="12" md="12" lg={{ span: 10, offset: 2 }}>
            <S.SectionTitle>
              Report Gauge
            </S.SectionTitle>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="12" lg="7">
            <S.Block1>
              <S.ReportBg src="/images/report-bg1.jpg" className="d-none d-lg-block" />
              <Col xs="12" sm="12" md="12">
                <S.Title1>
                  #Saudades.
                </S.Title1>
                <S.SubTitle1>
                  O que tivemos que abandonar durante a pandemia e faz muita falta na rotina?
                </S.SubTitle1>
              </Col>
              <Col xs="12" sm="12" md="12">
                <S.SubTitle>
                  O time de Social Lab apresenta o novo Report Gauge, criado e desenvolvido pelas áreas de criação, conteúdo, insights e monitoramento, através da análise de redes sociais e suas milhares de menções sobre diferentes temas. Siga os principais assuntos e tendências fundamentais para entender o presente e se preparar para o futuro.
                </S.SubTitle>
              </Col>
              <Col xs="12" sm="12" md="8">
                <S.ButtonDownload type="button" variant="danger" onClick={() => buttonAction("GaugeInisights_EstudoSaudade.pdf")}>
                  FAÇA DOWNLOAD DO PDF
                </S.ButtonDownload>
              </Col>
            </S.Block1>
          </Col>
          <Col xs="12" sm="12" md="12" lg="5">
            <S.Block2>
              <Col xs="12" sm="12" md="12">
                <S.Title>
                  #Comprei.
                </S.Title>
              </Col>
              <Col xs="12" sm="12" md="6" lg="12">
                <S.SubTitle>
                  O que mudou no comportamento de compra durante a pandemia?
                </S.SubTitle>
                <S.ButtonDownload type="button" variant="danger" onClick={() => buttonAction("GaugeInsights-Comprei_Maio2020.pdf")}>
                  download
                </S.ButtonDownload>
              </Col>
            </S.Block2>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default Component;
