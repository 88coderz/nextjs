
import pool from '../utils/connectPool'; // Replace with your db connection path
import PhoneNumberSanitize from './phoneNumber';

export default async function handler(req, res) {
    if (req.method === 'POST') {        
        const { phoneNumber } = req.body;

        try {
            const client = await pool.connect();
            const result = await client.query(
                'INSERT INTO phone_numbers (phone_number) VALUES ($1)',
                [phoneNumber]
            );

            client.release();
            res.status(200).json({ message: 'Phone number inserted successfully.' });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error inserting phone number.' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed.' });
    }
}