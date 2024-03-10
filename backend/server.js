const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/formDB', 
{
 useNewUrlParser: true,
 useUnifiedTopology: true 
}).then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));


const { Schema, model } = require('mongoose');
// Define a schema and model for the form data
const formSchema = new Schema({
    name: String,
    email: String,
    message: String
});
const Form = model('Form', formSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API routes
app.post('/api/form', (req, res) => {
    const { name, email, message } = req.body;
    const newForm = new Form({ name, email, message });
    newForm.save()
    .then(form=>{console.log("form submitted",form)
    res.send(req.body)
})
    .catch(()=>console.log('failed to submit') )
    
});

app.get('/api/forms', (req, res) => {
    Form.find()
    .then(data=>{
        console.log("all forms data are",data);
        res.send(data);
    }).catch(err=>console.log("err occured",err))
    });


// Start the server
app.listen(PORT, () => {
    console.log(`Server is runnings on port ${PORT}`);
});
