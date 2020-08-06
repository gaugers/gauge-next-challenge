import React from 'react';
import { Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import * as S from "./styled";

export interface ComponentProps {
    id: string;
}


const Component = React.memo((props: ComponentProps) => {
  const linkClick = (media: string) => {
    // @ts-ignore
    window.dataLayer.push({
      event: "interaction",
      eventActor: "user",
      interactionType: "linkClick",
      props: {
        type: "socialNetworkLink",
        title: media // facebook, linkedin
    }
  });
  }

  return (
    <S.Section id={props.id}>
      <S.Content>
        <Col xs="6" md="6" lg="3">
          <S.TracoImg src="/images/footer/traco-duplo.svg" alt="footer logo detail image" />
        </Col>
        <S.Block>
          <Col xs="12" md="4" lg="3">
            <S.Logo src="/images/footer/logo.svg" alt="footer logo image" />
          </Col>
          <Col xs="12" md={{span: 5, offset: 1}} lg={{span:3, offset: 1}} className="mt-5 mt-md-2">
            <div className="d-flex flex-row w-100">
              <S.Icone src="/images/footer/localizacao.svg" alt="footer location icon" />
              <S.Contact>
                <p>
                  Alameda Jaú, 1717 - Casa 08 <br />
                  São Paulo - SP  <br />
                  <strong>+55 11 2368-8777</strong>
                </p>
              </S.Contact>
            </div>
            <div className="d-flex flex-row w-100">
              <S.Icone src="/images/footer/localizacao.svg" alt="footer location icon" />
              <S.Contact>
                <p>
                  Rua Santa Clara, 690 <br />
                  São José dos Campos - SP <br />
                  <strong>+55 12 3308-9667</strong>
                </p>
              </S.Contact>
            </div>
          </Col>
          <Col md="2" lg="3" className="d-flex flex-md-column flex-lg-row mt-2 justify-content-center">
            <S.Link aria-label="Instagram" className="mb-md-2 mb-lg-0 mr-3 mr-md-0 mr-lg-3" href="https://www.instagram.com/gauge.digital/" target="_black" onClick={() => linkClick('instagram')} rel="noopener">
              <LazyLoadImage src="/images/footer/instagram.svg" alt="footer social media instagram" />
            </S.Link>
            <S.Link aria-label="Facebook" className="mb-md-2 mb-lg-0 mr-3 mr-md-0 mr-lg-3" href="https://www.facebook.com/gauge/" target="_black" onClick={() => linkClick('facebook')} rel="noopener">
              <LazyLoadImage src="/images/footer/facebook.svg" alt="footer social media facebook" />
            </S.Link>
            <S.Link aria-label="Linkedin" href="https://www.linkedin.com/company/gauge/" target="_black" onClick={() => linkClick('linkedin')} rel="noopener">
              <LazyLoadImage src="/images/footer/linkedin.svg" alt="footer social media linkedin" />
            </S.Link>
          </Col>
        </S.Block>
      </S.Content>
    </S.Section>
  );
});

export default Component;
