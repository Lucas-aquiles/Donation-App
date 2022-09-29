import React from "react";
import { Formik } from "formik";
import styled from "styled-components";



const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`;
const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

const Button = styled.button`
  width: 300px;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
`;




const Text = styled.p`
color: blue;
`;


const Register = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'A password is required';
        }else if (values.password.length < 6) {
          errors.password = "Password must be 6 characters";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form onSubmit={handleSubmit}>
           <Label> 
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          </Label> 
          <Label>  
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          </Label>
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

  export default Register;
