import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

  // TITLE useFormik 

  // CASE useFormik has object arguments
  // 1. initialValues -> 각 input의 handleChange를 통해 formik.values에 반영된다
  // 2. onSubmit -> form의 handleSubmit을 통해 onSubmit 실행. button에 type="submit" 추가
  // 3. validate 

  // CASE useFormik returns object
  // formik.values <- onChange={handleChange} 
  // formik.errors <- validate
  // formik.touched <- onBlur={handleBlur}   // true, false

  const formik = useFormik({
    initialValues, 
    onSubmit,
    // validate
    validationSchema
  })

  console.log(formik.touched);

  // NOTE : onChange, value, onBlur -> {...formik.getFieldProps('name')}
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-contril">
          <label htmlFor="name">Name</label>
          <input 
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
          <input 
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
          <input 
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
      </form>
    </div>
  )
}

export default UseFormik;

/*
Managing form state
form state {
  name: ''
}
*/