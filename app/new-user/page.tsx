import React, { useState } from 'react';

const VerificationForm = () => {
  const [location, setLocation] = useState('');
  const [auth, useAuth] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [headline, setHeadline] = useState('');
  
  type e = { e: string }

  const handleSubmit = async ( e:string ) => {
    e.preventDefault();

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

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='location' ></input>
      <input placeholder='email' ></input>
      <input placeholder='username' ></input>
      <input placeholder='headline' ></input>
      
      <button type="submit"> Submit </button>
      { headline && <p> { headline } </p> }
    </form>
  );
};

export default VerificationForm;
