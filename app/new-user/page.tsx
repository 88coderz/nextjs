'use client' ; import React, { useState } from 'react' ;

export default async function NewUserForm () {
  
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

    <input id='newUserLocation' type='text' placeholder='location'>`${location}`</input>
    <input id='newUserEmail'    type='email' placeholder='email'>`${email}`</input>
    <input id='newUserUserName' type='text' placeholder='username'>`${username}`</input>
    <input id='newUserHeadLine' type='text' placeholder='headline'>`${headline}`</input>
    <input id='newUserAvitar' type='avitar' placeholder='add your image'>`${avitar}`</input>
      
    <button type="submit"> Submit </button>
  </form>
  );
};
