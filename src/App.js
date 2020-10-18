import React from 'react';
import './App.css';
import OriginamForm from './components/OriginamForm';
import UseFormik from './components/UseFormik';


function App() {
  return (
    <div className="App">
      {/*<OriginamForm />*/}
      <UseFormik />
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