import React, { useState } from 'react';

const NewUserForm = () => {
  const [location, setLocation] = useState('');
  const [auth, useAuth] = useState('');   // token associated with NewUser ? 
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [headline, setHeadline] = useState('');
  
  type e = { e: string }

  const handleSubmit = async ( e:string ) => {
    // e.preventDefault();

    try {
      const response = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username }),

      });

      const data = await response.json();
      setHeadline(data.Headline);

    } catch (error) {
      console.error(error);
      setHeadline('Error: Something went wrong');

    }
  };
 // res , req cycle vs onSubmit   
 // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
  return (
    <form onSubmit={handleSubmit}> 
      
      <input id='newUserLocation' type='text' placeholder='location' ></input>
      <input id='newUserEmail'    type='email' placeholder='email' ></input>
      <input id='newUserUserName' type='text' placeholder='username' ></input>
      <input id='newUserHeadLine' type='text' placeholder='headline' ></input>
      
      <button type="submit"> Submit </button>
      { headline && <p> { headline } </p> }

    </form>
  );
};

export default NewUserForm;
