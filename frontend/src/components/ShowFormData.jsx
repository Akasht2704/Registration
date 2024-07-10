import axios from "axios";

function ShowFormData({setForms}) {
    function handleClick() {
        axios.get('http://localhost:5000/api/forms')
        .then(response => {
            console.log(response.data);
            setForms([...response.data]);
        })
        .catch(error => {
            console.log('Error fetching forms:', error);
        });  
    }

    return(
        
       <>
       <button 
       type="button"
       onClick={handleClick}
       >
        Show Form Data
       </button>
       </> 
        
    );
    
}
export default ShowFormData;