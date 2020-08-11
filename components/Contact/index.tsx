import React from 'react';
import loadable from '@loadable/component'

import { Container, Col, Row } from 'react-bootstrap';

import * as S from "./styled";

const Form = loadable(() => import('./form'))

export interface ComponentProps {
    id: string;
}


const Component = React.memo((props: ComponentProps) => {
  return (
    <S.Section id={props.id}>
      <Container>
        <Row>
          <Col sm="12" md="12" lg="6" className="d-flex align-items-center">
            <S.Title>
              vamos <br />
              conversar!
            </S.Title>
          </Col>
          <Col sm="12" md="12" lg={{span: 5, offset: 1}}>
            <Form />
          </Col>
        </Row>
      </Container>
    </S.Section>
  );
});

export default Component;
