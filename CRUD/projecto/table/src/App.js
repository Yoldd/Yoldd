import React,{useState} from "react";
import files from "./files";
import {nanoid} from "nanoid";
import './App.css';





function App() {

  
  const [contacts, setContacts] = useState(files);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber:"",
    email: ""

  })
 function handleInputValueChange(event){
  event.preventDefault();
 const fieldName = event.target.getAttribute('name');
 const fieldValue = event.target.value;

 const newFormData =  {...addFormData};
 newFormData[fieldName] = fieldValue;

 setAddFormData(newFormData)
}

// const handleInputChange1 = (event) =>{
//   const inputChange = event.target.value
//   setAddFormData({...addFormData, fullName: inputChange})
// }
// const handleInputChange2 = (event) =>{
//   const inputChange = event.target.value
//   setAddFormData({...addFormData, address: inputChange})
// }
// const handleInputChange3 = (event) =>{
//   const inputChange = event.target.value
//   setAddFormData({...addFormData, phoneNumber: inputChange})
// }
// const handleInputChange4 = (event) =>{
//   const inputChange = event.target.value
//   setAddFormData({...addFormData, email: inputChange})
// }
 const handleAddFormSubmit = (event) => {
  event.preventDefault();

  const newContact = {
    id: nanoid(),
    fullName:addFormData.fullName,
    address: addFormData.address,
    phoneNumber: addFormData.phoneNumber,
    email: addFormData.email,


  };
// estamos aki
const newContacts = [...contacts, newContact];
setContacts(newContacts)

setAddFormData({
  fullName: "",
    address: "",
    phoneNumber:"",
    email: ""
});
  };



  return (
    <div className="App">
     

     <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contactList)=>{
            return(
              <tr >
              <td>{contactList.fullName}</td>
              <td>{contactList.address}</td>
              <td>{contactList.phoneNumber}</td>
              <td>{contactList.email}</td>
            </tr>
            )
          })}
        
        </tbody>
      </table>
      <h2>Add Row</h2>
      <form onSubmit={handleAddFormSubmit}>
      <input 
     
      type='text'
      name='fullName'
      required='required'
      placeholder='enter a name...'
      onChange={handleInputValueChange}
      />
        <input 
        
      type='text'
      name='address'
      required='required'
      placeholder='enter a Address...'
      onChange={handleInputValueChange}
      />
        <input       
      type='text'
      name='phoneNumber'
      required='required'
      placeholder='enter a Phone Number...'
      onChange={handleInputValueChange}
      />
        <input value={addFormData.email}
      type='email'
      name='email'
      required='required'
      placeholder='enter a Email...'
      onChange={handleInputValueChange}
      />
      <button type='submit'>Add</button>
      </form>

    </div>
  );
}

export default App;
