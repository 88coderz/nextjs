import React, { useState } from 'react';

async function PhoneNumberInput  ( onSubmit: any ) {

    const [phoneNumber, setPhoneNumber] = useState('000-000-0000');

    const handleInputChange = (e: any ) => {
    // Sanitize phone number for any non-digit character (letters, symbols or whitespace) anywhere in a string and returns occurrences
        const sanitizedNumber = e.target.value.replace(/\D/g, '');
        setPhoneNumber(sanitizedNumber);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(phoneNumber);
    };

    return (
        <form formAction = { handleSubmit }  >
            <label htmlFor='phoneNumber'>Phone Number:</label>
                <input 
                    id='phoneNumber'
                    type='tel'                
                    value = { phoneNumber }
                    onChange = { handleInputChange }
                    required />

            <button type="submit" > Submit </button> 
        </form>
    );
};

export default PhoneNumberInput;