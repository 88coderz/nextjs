'use client' ; 
import React, { useState } from 'react' ;
import { authenticate } from '@/app/_lib/auth';
import { useFormState } from 'react-dom';
// https://react.dev/reference/react-dom/hooks/useFormState#using-information-returned-by-a-form-action

export async function NewUserForm ( {providers, csrfToken} ) {
// https://www.typescriptlang.org/docs/handbook/2/classes.html
class NewSingleUser {   
  auth: boolean;
  email: string ;
  userName: string;
//  super(): any ;  <<<< when is super() applied ????
constructor (
  auth = false,
  email = 'your@email.com',
  userName = 'New User',
) {
  this.auth = auth,
  this.email = email , 
  this.userName = userName ;    
  }      
}      
const [ formData, setFormData ] = useState('');
const [ username, setUsername ] = useState(''); 
const [ email, setEmail ]       = useState('');
const [ state, newUser ]     = useFormState( authenticate, null );

  const handleChange = (e) => {    const { name , value } = e.target;
    setFormData( ( prevState ) => ( { ...prevState, [ name ]: value } ) );  };


return (
  <form id='newUserFormId'
        action='NewUser'    
        onSubmit={ () => /* write expression */ } > 

    <h3> Enter Your User Info </h3> 
    <h5> this can be changed later too </h5>
    
    <label htmlFor='newUserEmail'></label>
      <input id='newUserEmail' 
             type='email' 
             placeholder='email' 
             onChange={handleChange}
             required />
    
    <label htmlFor='newUserUserName'></label>
      <input id='newUserUserName' 
             type='text' 
             placeholder='username' 
             onChange={handleChange}
             required />
    
    <label htmlFor='firstName'>First Name:</label>
      <input id='firstName' 
             type='text' 
             placeholder='insert here' 
             onChange={handleChange}
             required />
    
    <label htmlFor='lastName'>Last Name:</label>
      <input id='lastName' 
             type='text' 
             placeholder='insert here' 
             onChange={handleChange}
             required />
        
          <button type="submit"> Submit </button>
  </form>
  );  }; // let counter = <REQUIRED INPUTS> for .button{opacity}
let NewUser = document.getElementById("newUserFormId")

// let NewUserCreatedOrNot = verifiedUserCreated ? https://node-postgres.com/apis/result : RetryNewUserInfo

export default NewUser() { return( ) };