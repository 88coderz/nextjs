
import React, { useState } from 'react';
import PhoneNumberInput from './page';

export default function PhoneNumberSanitize  ( onSubmit: any ) {
    
    const [phoneNumber, setPhoneNumber] = useState('000-000-0000');

    const handleInputChange = (e: any ) => {
    // Sanitize phone number for any non-digit character (letters, symbols or whitespace) anywhere in a string and returns occurrences
        const sanitizedNumber = e.target.value.replace(/\D/g, '');
        setPhoneNumber(sanitizedNumber);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSubmit(phoneNumber);
    };
    
};
