import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const AddUserNew = () => {
    const navigate = useNavigate();

    const[ name,setName] =useState("");
    const[ username,setUsername] =useState("");
    const[ email,setEmail] =useState("");
    const[ phone,setPhone] =useState("");
    const[ website,setWebsite] =useState("");

   

    const onNameChange = e =>{
      setName(e.target.value);
    }
    const onUsernameChange = e =>{
      setUsername(e.target.value);
    }
    const onEmailChange = e =>{
      setEmail(e.target.value);
    }
    const onPhoneChange = e =>{
      setPhone(e.target.value);
    }
    const onWebsiteChange = e =>{
      setWebsite(e.target.value);
    }
  

   const onFormSubmit = async event =>{
    event.preventDefault();
    if(!name){
      alert("Name cannot be empty");
      return;
    }
    if(!username){
      alert("username cannot be empty");
      return;
    }
    if(!email){
      alert("email cannot be empty");
      return;
    }
    if(!phone){
      alert("phone cannot be empty");
      return;
    }
    const user ={ name:name, username:username, email:email, phone:phone, website:website }
   await  axios.post("http://localhost:5000/users",user)
   navigate.push('/home')
   }

  return (
    <div className="container">
      <div className="w-75 mx-auto p-5 shadow">
        <h2 className="text-center mb-4">Add User</h2>
      <div >
         <div className="form-group mb-2">
           <input type ="text"
             className="form-control form-control-lg"
             placeholder="Enter the full name"
             name="name"
             value={name}
             onChange={(event)=>onNameChange(event)}
           />
          </div>
          <div className="form-group mb-2 mb-2">
           <input type ="text"
             className="form-control form-control-lg"
             placeholder="Enter your username"
             name="username"
             value={username}
             onChange={(event)=>onUsernameChange(event)}
           />
          </div>
          <div className="form-group mb-2 ">
           <input type ="email"
             className="form-control form-control-lg"
             placeholder="Enter your email"
             name="email"
             value={email}
             onChange={(event)=>onEmailChange(event)}
           />
          </div>
          <div className="form-group mb-2">
           <input type ="text"
             className="form-control form-control-lg"
             placeholder="Enter your phone number"
             name="phone"
             value={phone}
             onChange={(event)=>onPhoneChange(event)}
           />
          </div>
          <div className="form-group mb-4">
           <input type ="text"
             className="form-control form-control-lg"
             placeholder="Enter your website"
             name="website"
             value={website}
             onChange={(event)=>onWebsiteChange(event)}
           />
          </div>
          <button onClick ={(event) => onFormSubmit(event)} className="btn btn-info text-white col-12">Add User</button>
        </div>
      </div>
    </div>
  )
 }
export default AddUserNew
