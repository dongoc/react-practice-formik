import React from 'react';
// import { useFormik } from 'formik';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl'

// TITLE : formik Components
// - Formik <- replace useFormik
// - Form <- replace form / not need 'onSubmit' props
// - Field <- replace input
// - Error Messages

const FormikForm = () => {

  const checkboxOptions = [
    {key: 'Option 1', value: 'cOption1'},
    {key: 'Option 2', value: 'cOption2'},
    {key: 'Option 3', value: 'cOption3'}
  ]

  const initialValues = {
      name: '',
      email: '',
      channel: '',
      comments: '',
      address: '',
      checkboxOption: [],
  }
  const onSubmit = (values) => {
      console.log('onSubmit', values);
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Name Required'),
    email: Yup.string().email('Invalid email format').required('Email Required'),
    channel: Yup.string().required('Channel Required'),
    checkboxOption: Yup.array().required('required')
  })

  return (
    <Formik 
      initialValues={initialValues} 
      validationSchema={validationSchema} 
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name"/>
          <ErrorMessage name='name' component='div'/>
        </div>
        
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name='email' />
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name='channel' />
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="comments" name="comments" />
          <ErrorMessage name='comments' />
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {(props) => {
              // console.log(props);
              const { field, form, meta } = props;
              return (
                <div>
                  <input id='address' {...field}/>
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              )
            }}
          </Field>
          <ErrorMessage name='comments' />
        </div>

        <FormikControl
          control='checkbox'
          label='Checkbox topics'
          name='checkboxOption'
          options={checkboxOptions}
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default FormikForm;
