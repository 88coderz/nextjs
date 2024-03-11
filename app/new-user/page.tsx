'use client' ; import React, { useState } from 'react' ;
import { authenticate } from '@/app/lib/actions';

export default async function NewUserForm () {

// https://www.typescriptlang.org/docs/handbook/2/classes.html
class NewSingleUser {   
  location: string;
  auth: boolean;
  associatedTickets: boolean;
  avitar: boolean;
  email: string ;
  userName: string;
//  super(): any ;  <<<< when is super() applied ????
constructor (
  location = 'Austin, Texas',
  auth = false,
  associatedTickets = false,
  avitar = false,
  email = 'insert@email.com',
  userName = 'New User',
) {
  this.location = location,
  this.auth = auth,
  this.associatedTickets = associatedTickets,
  this.avitar = avitar ,
  this.email = email , 
  this.userName = userName ;    
  }      
}      

  const [username, setUsername] = useState('');
  const [headline, setHeadline] = useState('');  
  const [email, setEmail] = useState('');
  const [avitar, setAvitar] = useState('');
  const [location, setLocation] = useState('');

return (

  <form id='newUserFormId'
        action='client'    > 
    <h3> Enter Your User Info </h3> 
    <h5> this can be changed later too </h5>

    <input id='newUserLocation' type='text' placeholder='location' required>`${location}`</input>
    <input id='newUserEmail'    type='email' placeholder='email' required>`${email}`</input>
    <input id='newUserUserName' type='text' placeholder='username' required>`${username}`</input>
    <input id='newUserHeadLine' type='text' placeholder='headline'>`${headline}`</input>
    <input id='newUserAvitar' type='avitar' placeholder='add your image'>`${avitar}`</input>
      
    <button type="submit"> Submit </button>

  </form>

  );
};
