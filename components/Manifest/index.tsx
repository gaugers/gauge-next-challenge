import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// @ts-ignore
import Typewriter from 'typewriter-effect';

import * as S from "./styled";

export interface ComponentProps {
    id: string;
}


const Component = React.memo((props: ComponentProps) => {
  const [height, setHeight] = useState(670)

  const onLoad = ({ target: img } : any ) => {
    setHeight(img.height);
  }

  return (
    <S.Section id={props.id} height={height}>
      <Container>
        <Row>
          <S.Circle
            src="/images/circle-bg.webp"
            className="d-none d-lg-block"
            alt="gauge circle icon background image"
          />
          <S.Circle
            src="/images/circle-bg.webp"
            className="d-lg-none col-12"
            onLoad={onLoad}
            alt="gauge circle icon background image"
          />
          <Col md={{span: 10, offset: 1}} className="align-self-center">
            <S.Title>
              somos
              <S.Text className="ml-4">
                <Typewriter
                  options={{
                    strings: ['agência', 'consultoria', 'digitais'],
                    autoStart: true,
                    loop: true,
                    cursor: ''
                  }}
                />
              </S.Text>
            </S.Title>
          </Col>
        </Row>
      </Container>
    </S.Section>
  );
});

export default Component;
