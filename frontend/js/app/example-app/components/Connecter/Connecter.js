import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
//import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Card, Form, Button, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
export const Connecter = () => {
  return (
    <Container>
      <CARD text="white" body>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Adresse e-mail invalide')
              .min(5, 'Adresse e-mail trop courte')
              .max(254, 'Adresse e-mail trop longue')
              .required('Adresse e-mail requise'),
            password: Yup.string().required('Mot de passe requis'),
          })}
          onSubmit={(values) => {
            //   dispatch(
            //     actions.inscriptionDemandee({
            //       prenom: values.prenom,
            //       nom: values.nom,
            //       email: values.email,
            //       telephone1: values.telephone1,
            //     })
            //   );
          }}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group as={Row}>
                <Form.Label column="lg" md={3}>
                  Email
                </Form.Label>
                <Col md={9} lg={9}>
                  <FormControl
                    id="email"
                    type="email"
                    placeholder="Adresse email"
                    {...formik.getFieldProps('email')}
                  />
                  <span style={{ color: '#F063B8' }}>
                    <ErrorMessage name="email" />
                  </span>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column="lg" md={3}>
                  Mot de passe
                </Form.Label>
                <Col md={9} lg={9}>
                  <FormControl
                    id="password"
                    type="password"
                    placeholder="Mot de passe"
                    {...formik.getFieldProps('password')}
                  />
                  <span style={{ color: '#F063B8' }}>
                    <ErrorMessage name="password" />
                  </span>
                </Col>
              </Form.Group>
              <Row>
                <Col md={{ offset: 3 }}>
                  <BUTTON type="submit">S'inscrire</BUTTON>
                </Col>
              </Row>
              <Row>
                <Col md={{ offset: 3 }}>
                  <StyledLink to="/login"> Vous avez déjà un compte? Connectez-vous </StyledLink>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </CARD>
    </Container>
  );
};
const BUTTON = styled(Button)`
  border-radius: 50px;
  background: #000000;
`;

const CARD = styled(Card)`
  border-radius: 50px;
  padding: 25px;
  background: #000000;
`;

const FormControl = styled(Form.Control)`
  border-radius: 25px;
`;

const StyledLink = styled(Link)`
  color: ${(p) => p.theme.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
`;

export default Connecter;
