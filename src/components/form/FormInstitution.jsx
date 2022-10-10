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
  height: auto;
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


const FormInstitution = ({
  text,
  text2,
  valuemodal,
  setModal,
  setName,
  setControlModalLogin,
}) => (
  //login es text
  <ContainerForm onClick={stopProp}>
     <Text>{text2}</Text> 

    <Formik
      initialValues={{ name: "", cbu: "" , addres:"", description:"",image:"",localidad:""}}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        }
        if (!values.cbu) {
            errors.cbu = "Required";
          }
          if (!values.addres) {
            errors.addres = "Required";
          }
          if (!values.description) {
            errors.description = "Required";
          }
          if (!values.image) {
            errors.image = "Required";
          }
          if (!values.localidad) {
            errors.localidad = "Required";
          }


        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));

            //  handleCreateAcount(
            //     values.email,
            //     values.password,
            //     values.name,
            //     values.toggle,
            //     valuemodal,
            //     setModal,
            //     setName
            //   )
            

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
              Name
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
            </Label>

            <Label>
              Description
              <Input
                type="text"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              {errors.description && touched.description && errors.description}
            </Label>

            <Label>
              Count Bancary
              <Input
                type="text"
                name="cbu"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cbu}
              />
              {errors.cbu && touched.cbu && errors.cbu}
            </Label>

            <Label>
              Load Image
              <Input
                type="text"
                name="image"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.image}
              />
              {errors.image && touched.image && errors.image}
            </Label>
            <Label>
              Localidad
              <Input
                type="text"
                name="localidad"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.localidad}
              />
              {errors.localidad && touched.localidad && errors.localidad}
            </Label>
            <Label>
              Addres
              <Input
                type="text"
                name="addres"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.addres}
              />
              {errors.addres && touched.addres && errors.addres}
            </Label>
          
          
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>


  </ContainerForm>
);

export default FormInstitution;
