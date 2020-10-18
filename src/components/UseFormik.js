import React from 'react';
import { useFormik } from 'formik';

const UseFormik = () => {

  // TITLE useFormik returns object
  // 1. initialValues -> handleChange를 통해 formik.values에 반영된다
  // 2. 
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: ''
    }
  })
  
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input 
          type="text" id="name" name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        
        <label htmlFor="name">E-mail</label>
        <input 
          type="email" id="email" name="email" 
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="name">Channel</label>
        <input 
          type="text" id="channel" name="channel" 
          onChange={formik.handleChange}
          value={formik.values.channel}
        />

        <button>Submit</button>
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