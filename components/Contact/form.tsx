import React, { useState, useEffect } from "react";
import { Col, Row, Form, Spinner } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import axios from 'axios';

import * as S from "./styled";
const recaptchaRef = React.createRef();


const Component = React.memo(() => {
  const [recaptcha, setRecaptcha] = useState('');
  const [showRecaptcha, setShowRecaptcha] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState('d-none');
  const [messageError, setMessageError] = useState('d-none');
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    try {
      const inputElement = document.getElementById('formPhone');
      if (inputElement) {
        inputElement.addEventListener('input', formatPhone);
      }
    } catch {}
  }, [])

  const formatPhone = (event: any) => {
    let value = '';
    if (event.target.value.replace(/\D/g, '').length >= 11) {
        value = event.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/)
        event.target.value = !value[2] ? value[1] : '(' + value[1] + ') ' + value[2] + (value[3] ? '-' + value[3] : '')
    } else {
        value = event.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,4})(\d{0,4})/)
        event.target.value = !value[2] ? value[1] : '(' + value[1] + ') ' + value[2] + (value[3] ? '-' + value[3] : '')
    }
  }

  const handleSubmit = (event: any) => {
      const form = event.currentTarget;
      event.preventDefault();
      event.stopPropagation();

      if (!form.checkValidity() || recaptcha === '') {
        setNameValid(form.formName.checkValidity());
        setEmailValid(form.formEmail.checkValidity());
        setPhoneValid(form.formPhone.checkValidity());
        setMessageValid(form.formMessage.checkValidity());
      } else {
        submitForm(form);
      }
  }

  const submitForm = (form: any) => {
    const data = {
        name: form.formName.value,
        email: form.formEmail.value,
        phone: form.formPhone.value,
        message: form.formMessage.value,
        recaptchaResponse: recaptcha
    }

    // @ts-ignore
    window.dataLayer.push({
      event: "form",
      eventActor: "user",
      interactionType: "submit",
      props: {
        formName: "contato",
        status: "intent"
      }
    });

    setIsSaving(true);
    axios.post(`${process.env.REACT_APP_BASE_URL}/contact-us`, data)
      .then(function () {
          setMessageSuccess('');
          setMessageError('d-none');
          setIsSaving(false);
          // @ts-ignore
          recaptchaRef.current.reset();

          form.reset();
      })
      .catch(function () {
        setMessageError('');
        setMessageSuccess('d-none');
        setIsSaving(false);
        // @ts-ignore
        recaptchaRef.current.reset();
      })
  }

  const onFocusout = (event: any) => {
    if (!showRecaptcha) setShowRecaptcha(true);
    // @ts-ignore
    window.dataLayer.push({
        event: "form",
        eventActor: "user",
        interactionType: "fill",
        props: {
            formName: "contato", // nome do formulário
            fieldName: event.target.id, // nome do campo
            value: event.target.value // valor do campo
        }
    })
  }

  const onChange = (value: any) => {
    setRecaptcha(value);
  }

  return (
    <>
        <Form noValidate onSubmit={handleSubmit}>
            <Row>
                <S.TextHelp>
                    *Campos obrigatórios
                </S.TextHelp>
            </Row>
            <Row>
                <Col sm="12" md="12" lg="12">
                    <S.FormGroup controlId="formName" isValid={nameValid}>
                        <S.Label isValid={nameValid}>Nome<span>*</span></S.Label>
                        <S.Field type="text" required onBlur={onFocusout} />
                    </S.FormGroup>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md="7" lg="7">
                    <S.FormGroup controlId="formEmail" isValid={emailValid}>
                        <S.Label isValid={emailValid}>Email<span>*</span></S.Label>
                        <S.Field type="email" required onBlur={onFocusout} />
                    </S.FormGroup>
                </Col>
                <Col sm="12" md="5" lg="5">
                    <S.FormGroup controlId="formPhone" isValid={phoneValid}>
                        <S.Label isValid={phoneValid}>Telefone<span>*</span></S.Label>
                        <S.Field type="text" required onBlur={onFocusout} />
                    </S.FormGroup>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md="12" lg="12">
                    <S.FormGroup controlId="formMessage" isValid={messageValid}>
                        <S.Label isValid={messageValid}>Mensagem<span>*</span></S.Label>
                        <S.Field id="formMessage" as="textarea" rows={3} required onBlur={onFocusout} />
                    </S.FormGroup>
                </Col>
            </Row>
            <Row>
              <Col sm="12" md="7" lg="7">
                {showRecaptcha ?
                  <S.Recaptcha
                    onChange={onChange}
                    ref={recaptchaRef}
                    sitekey="6Lcg8uUUAAAAAEEDmGqFuKeGTmTS92yiXxTdGa05"
                  />
                  :
                  ''
                }
              </Col>
              <Col sm="12" md="5" lg="5" className="mt-2">
                  <S.SubmitButton disabled={isSaving} variant="default" type="submit" aria-label="Enviar">
                      {isSaving ?
                        <div className="d-flex justify-content-center align-items-center">
                          <Spinner animation="border" size="sm" className="mr-1" />
                          Enviando
                        </div>
                        :
                        'Enviar'
                      }
                  </S.SubmitButton>
              </Col>
          </Row>
          <Row>
              <Col xs="12" sm="12" md="12" lg="12" className="mt-3">
                  <S.MessageSuccess className={`px-2 ${messageSuccess}`}>
                      <LazyLoadImage src="/images/success.svg" alt="form submit success" className="mr-3" />
                      Dados enviados com sucesso! Entraremos em contato em breve.
                  </S.MessageSuccess>

                  <S.MessageError className={`px-2 ${messageError}`}>
                    <LazyLoadImage src="/images/error.svg" alt="form submit error" className="mr-3" />
                    Não foi possível enviar seu contato. Por favor, revise os dados digitados.
                  </S.MessageError>
              </Col>
          </Row>
        </Form>
    </>
  );
});

export default Component;
