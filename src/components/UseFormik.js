import React from 'react';
import { useFormik } from 'formik';

const UseFormik = () => {

  const initialValues = {
      name: '',
      email: '',
      channel: ''
  }
  const onSubmit = (values) => {
      console.log('onSubmit', values);
  }
  // NOTE : validate func MUST return an OBJECT(errors)
  const validate = (values) => {
      let errors = {};
      // values.name values.email values.channel
      // errors.name errors.email errors.channel
      if (!values.name) {
        errors.name = 'Required';
      }
      if (!values.email) {
        errors.email = 'Required';
      }
      if (!values.channel) {
        errors.channel = 'Required';
      }
      return errors;
    }

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
    validate
  })

  console.log(formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-contril">
          <label htmlFor="name">Name</label>
          <input 
            type="text" id="name" name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name ? <div className="error">formik.errors.name</div> : null}
        </div>
        
        <div className="form-contril">
          <label htmlFor="name">E-mail</label>
          <input 
            type="email" id="email" name="email" 
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email ? <div className="error">formik.errors.email</div> : null}
        </div>

        <div className="form-contril">
          <label htmlFor="name">Channel</label>
          <input 
            type="text" id="channel" name="channel" 
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
          />
          {formik.errors.channel ? <div className="error">formik.errors.channel</div> : null}
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