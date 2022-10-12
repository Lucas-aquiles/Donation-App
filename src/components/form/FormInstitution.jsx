import React,{useState} from "react";
import { Formik } from "formik";
import styled from "styled-components";
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
    height: 600px;
    position: relative;
    top: 50px;
  }
`;



const Form = styled.form`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.primary};
  padding: 1rem;
  z-index: 999999;
  cursor: default;
  //mobile
  @media (max-width: 450px) {
    width: 300px;
    height:auto;
    flex-direction: column;
    justify-content: center;
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
    width: 90%;
    margin: 0px auto
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
    width: 80%;
    margin: 0px auto;
    border:solid;
    position: relative;
    left: 30px;
    top:10px
  }
`;
const Div =styled.div`
  width: 400px;
  //mobile
  @media (max-width: 450px) {
    /* background-position: 0%; */
    width: 300px;

    
  }
`


// ------------------------------------------------ //

const stopProp = (e) => {
  e.stopPropagation();
};


const FormInstitution = ({
    userId,
    addInstitution,
    setFormState,
    modalForm,
    modificationInstitution,
    setModalForm
}) => (
  //login es text
  <ContainerForm onClick={stopProp}>

    <Formik
      initialValues={{ name: "", cbu: "" , address:"", description:"",image:"",localidad:"",id:userId}}
         validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        }
        if (!values.cbu) {
            errors.cbu = "Required";
          }
          if (!values.address) {
            errors.address = "Required";
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
        modalForm === false && setTimeout(() => {
        // alert(JSON.stringify(values, null, 2));
            addInstitution(values)
            setFormState({})
          
          setSubmitting(false);
        }, 400);


          modalForm && setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
               modificationInstitution(values)
              setModalForm(false)
               setFormState({})
  
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
          <Div> 
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
            </Div>

            <Div>  
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
              Address
              <Input
                type="text"
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
              />
              {errors.address && touched.address && errors.address}
            </Label>
          
          
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
          </Div>
        </Form>
      )}
    </Formik>


  </ContainerForm>
);

export default FormInstitution;
