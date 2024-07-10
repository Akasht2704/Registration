import DeleteButton from './DeleteButton';
import './Style.css'
function FormTable({forms,setForms}){
      
    return(
     <table  className='border-black border-collapse ' >
       <thead>
        <tr>
         <th>Name</th>
         <th>Email</th>
         <th>Message</th>
         <th>Delete option</th>
        </tr>
       </thead>
       <tbody>
        {
            forms.map((f)=>
            (<tr key={f._id}>
              <td>{f.name}</td>
              <td>{f.email}</td>
              <td>{f.message}</td>
              <td><DeleteButton detail={f} setForms={setForms}/></td>              
            </tr>))
        }
      </tbody>
     </table>
    )
}
export default FormTable;