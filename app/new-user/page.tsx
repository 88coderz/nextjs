'use client'

import React, { useState } from 'react';
import { createClient } from '@vercel/postgres';


export default async function NewUserForm () {

  const [location, setLocation] = useState('');
  const [auth, useAuth] = useState('');   // token associated with NewUser ? 
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [headline, setHeadline] = useState('');
  
  type e = { e: string } 
   
  // auth0 ? FIND 3rd PARTY SIGN INs
  // https://nextjs.org/docs/app/building-your-application/authentication
  const response = await fetch('/api/verify', {

    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, username }),

  });

  const data = await response.json();    
    
  // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating

  // https://react.dev/reference/react-dom/components/form

  const client = createClient();
  await client.connect();

return (
  <form id='newUserFormId'
        action='createClient()'    > 

    <h3> Enter Your User Info </h3> 
    <h5> this can be changed later too </h5>

    <input id='newUserLocation' type='text' placeholder='location' />
    <input id='newUserEmail'    type='email' placeholder='email' />
    <input id='newUserUserName' type='text' placeholder='username' />
    <input id='newUserHeadLine' type='text' placeholder='headline' />
      
    <button type="submit"> Submit </button>

  </form>
  );
};
