import React from 'react';
import './App.css';
// import OriginamForm from './components/OriginamForm';
// import UseFormik from './components/UseFormik';
import FormikForm from './components/FormikForm';


function App() {
  return (
    <div className="App">
      {/*<OriginamForm />*/}
      {/*<UseFormik />*/}
      <FormikForm />
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