import React,{useState} from "react";
import { Formik } from "formik";
import styled from "styled-components";
import { handleCreateAcount, handleLogin } from "../../service/authFirebase.js";
import { Colors } from "../../styles/theme/Colors";

const ContainerForm = styled.div`
  width: auto;
  height: auto;
  z-index: 9999;
  margin: 0px auto;
  position:relative;

  //mobile
  @media (max-width: 450px) {
    width: auto;
    height: 500px;
    position: relative;
    top: 100px;
    border: solid;
  }
`;



const Form = styled.form`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid;
  background-color: ${Colors.primary};
  padding: 4rem;
  z-index: 999999;
  cursor: default;
  //mobile
  @media (max-width: 450px) {
    width: 300px;
    height: 400px;
  }
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
  color: white;
  font-family: "Poppins", cursive, sans-serif;
  font-size: 1.3rem;
  //mobile
  @media (max-width: 450px) {
    width: 150%;
  }
`;
const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;

  //mobile
  @media (max-width: 450px) {
    width: 100%;
  }
`;

const Button = styled.button`
  width: 300px;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  font-family: "Poppins", cursive, sans-serif;

  :hover {
    background-color: #3879db;
  }

  //mobile
  @media (max-width: 450px) {
    font-size: 1rem;
    margin-top: 1rem;
    width: 80%;
  }
`;

const Text = styled.h1`
  color: ${Colors.primary};
  font-family: "Poppins", cursive, sans-serif;
`;

const Text1 = styled.h3`
  color: ${Colors.white};
  font-family: "Poppins", cursive, sans-serif;
position: absolute;
right: 30px;
bottom: 80px;
`;

const stopProp = (e) => {
  e.stopPropagation();
};


const Forms = ({
  text,
  text2,
  valuemodal,
  setModal,
  setName,
  controlModalLogin,
  setControlModalLogin,
}) => (
  //login es text
  <ContainerForm onClick={stopProp}>
    {controlModalLogin ? <Text>{text2}</Text> : <Text>{text}</Text>}

    <Formik
      initialValues={{ name: "", email: "", password: "" , toggle: false }}
      validate={(values) => {
        const errors = {};
        // if (!values.name) {
        //   errors.name = "Required";
        // }
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.password) {
          errors.password = "A password is required";
        } else if (values.password.length < 6) {
          errors.password = "Password must be 6 characters";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));

          controlModalLogin
            ? handleCreateAcount(
                values.email,
                values.password,
                values.name,
                values.toggle,
                valuemodal,
                setModal,
                setName
              )
            : handleLogin(
                values.email,
                values.password,
                valuemodal,
                setModal,
                setName
              );

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
          {controlModalLogin ? (
            <Label>
              Name
              <Input
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
            </Label>
          ) : null}

          <Label>
            {" "}
            Email
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
            {" "}
            Password
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
          </Label>
          {controlModalLogin?<Label>
          Are you an institution?
            <Input
              type="checkbox"
              name="toggle"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.toggle}
            />
            {errors.password && touched.password && errors.password}
          </Label>:null}
          
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>

    {!controlModalLogin&&<Text1
      onClick={() => {
        setControlModalLogin(!controlModalLogin);
      }}
    >
      Sign Up
    </Text1>}
  </ContainerForm>
);

export default Forms;
