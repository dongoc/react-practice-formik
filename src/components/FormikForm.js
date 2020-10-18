import React from 'react';
// import { useFormik } from 'formik';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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

  return (
    <Formik 
      initialValues={initialValues} 
      validationSchema={validationSchema} 
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-contril">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name"/>
          <ErrorMessage name='name' />
        </div>
        
        <div className="form-contril">
          <label htmlFor="name">E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name='email' />
        </div>

        <div className="form-contril">
          <label htmlFor="name">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name='channel' />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default UseFormik;
