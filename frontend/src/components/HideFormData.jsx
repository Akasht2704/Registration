

function HideFormData({setForms}) {
    function handleClick() {
          setForms([]);
          
    }

    return(
        
       <>
       <button 
       type="button"
       onClick={handleClick}
       >
        Hide Form Data
       </button>
       </> 
        
    );
    
}
export default HideFormData;