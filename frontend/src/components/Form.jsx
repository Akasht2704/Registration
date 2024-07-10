import axios from "axios";
import './Style.css'


function Form({setFormData,formData,setForms}) {
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/form', formData)
            .then(response => {
                console.log(response.data);
                
                setFormData({ name: '', email: '', message: '' });
                axios.get('http://localhost:5000/api/forms')
            .then(response => {
                console.log(response.data);
                setForms([...response.data]);
            });
            })
            .catch(error => {
                console.log('Error submitting form:', error);
            });
            
    };


    return(
        <form onSubmit={handleSubmit} className="flex flex-col">
         <input type="text" name="name" value={formData.name} placeholder="Name" onChange={handleChange} className="bg-gray-200 w-80 h-8 rounded-xl" />
        <input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} className="bg-gray-200 w-80 h-8 rounded-xl"  />
        <textarea name="message" value={formData.message} placeholder="Message" onChange={handleChange} className="bg-gray-200 w-80 h-8 rounded-xl" ></textarea>
        <button type="submit" className="bg-gray-200 w-80 h-8 rounded-xl" >Submit</button>
    </form>
    );
}
export default Form;