import React from "react";
import { Col } from "react-bootstrap";

import * as S from "./styled";

export interface ComponentProps {
  data: {url: string, name:string}[],
  fixed: boolean,
  goToSection: any
};


const Component = React.memo((props: ComponentProps) => {
  const clickItem = (event: any, url: string) => {
    props.goToSection(event, url);
  };

  return (
    <>
      {props.data.map(link => (
          <Col md="2" lg="1" className="d-none d-md-block align-self-center" key={`key-${link.url}`}>
            <S.Link fixed={props.fixed} href={`#${link.url}`} onClick={(event) => clickItem(event, link.url)}>
              {link.name}
            </S.Link>
          </Col>
      ))}
      <S.MobileLinks xs="12" sm="12" className="d-md-none">
        {props.data.map(link => (
          <S.Link
            fixed={props.fixed}
            href={`#${link.url}`}
            onClick={(event) => clickItem(event, link.url)}
            key={`key-sm-${link.url}`}
            className="px-3"
          >
            {link.name}
          </S.Link>
      ))}
      </S.MobileLinks>
    </>
  );
});

export default Component;