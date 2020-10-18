import React from 'react';
// import { useFormik } from 'formik';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// TITLE : formik Components
// - Formik <- replace useFormik
// - Form <- replace form / not need 'onSubmit' props
// - Field <- replace input
// - Error Messages

const UseFormik = () => {

  const initialValues = {
      name: '',
      email: '',
      channel: ''
  }
  const onSubmit = (values) => {
      console.log('onSubmit', values);
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Name Required'),
    email: Yup.string().email('Invalid email format').required('Email Required'),
    channel: Yup.string().required('Channel Required')
  })

  // const formik = useFormik({
  //   initialValues, 
  //   onSubmit,
  //   // validate
  //   validationSchema
  // })

  // NOTE : onChange, value, onBlur -> {...formik.getFieldProps('name')}
  return (
    <Formik 
      initialValues={initialValues} 
      validationSchema={validationSchema} 
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-contril">
          <label htmlFor="name">Name</label>
          <Field 
            type="text" id="name" name="name"
            {...formik.getFieldProps('name')}
          />
          {
            formik.touched.name && formik.errors.name 
              ? <div className="error">{formik.errors.name}</div> 
              : null
          }
        </div>
        
        <div className="form-contril">
          <label htmlFor="name">E-mail</label>
          <Field 
            type="email" id="email" name="email" 
            {...formik.getFieldProps('name')}
          />
          {
            formik.touched.email && formik.errors.email 
              ? <div className="error">{formik.errors.email}</div> 
              : null
          }
        </div>

        <div className="form-contril">
          <label htmlFor="name">Channel</label>
          <Field 
            type="text" id="channel" name="channel" 
            {...formik.getFieldProps('name')}
          />
          {
            formik.touched.channel && formik.errors.channel 
              ? <div className="error">{formik.errors.channel}</div> 
              : null
          }
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default UseFormik;
