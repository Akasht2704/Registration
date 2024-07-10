import React, { useState} from 'react';
import FormTable from './components/FormTable';
import ShowFormData from './components/ShowFormData';
import HideFormData from './components/HideFormData';
import Form from './components/Form';
import './App.css'

function App() {
const [formData,setFormData] = useState({ name:'', email:'',  
         message: ''});
    const [forms, setForms] = useState([]);

    return (
    
    
        <div className='flex justify-center w-screen h-screen '>

            <div className='m-24'>
             <h1>Submit Form</h1>
             <Form setFormData={setFormData}
                  formData={formData}
                  setForms={setForms} 
             />
            </div>
            <div className='m-24'>
             <h2>Submitted Forms</h2>
             <ShowFormData setForms={setForms}/>
             <HideFormData setForms={setForms}/>
             <FormTable forms={forms} setForms={setForms}/>
            </div>
        </div>
    );
}

export default App;
