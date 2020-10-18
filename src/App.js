import React from 'react';
import { Formik, Form, Field } from 'formik';
import './App.css';
import YoutubeForm from './components/YoutubeForm';

function App() {
  return (
    <div className="App">
      <YoutubeForm />
    </div>
  );
}

export default App;

/*

form
- handle form data
- validation
- visual feedback with error messages
- form submission
 */