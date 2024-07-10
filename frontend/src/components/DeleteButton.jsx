import axios from "axios";


function DeleteButton({detail,setForms}) {
    function handledelete() {
       axios.post('http://localhost:5000/api/formdelet',detail)
       .then( response=>{console.log('deleted data are',response);
            
      })
       .catch(er=>console.log('Cannot delete due to',er)); 
       console.log(detail.name);

        axios.get('http://localhost:5000/api/forms')
        .then(response => {
            console.log(response.data);
            setForms([...response.data]);
        });
    }
   
   return(
       <button type="button" onClick={handledelete}>Delete</button>
   );
}
export default DeleteButton;