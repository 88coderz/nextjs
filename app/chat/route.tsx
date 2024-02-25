

import type { NextApiRequest , NextApiResponse } from 'next';

import { Client } from 'pg'; 

import '.env.local' ;

const client = new Client({

  // PostgreSQL connection details , which .env to put here ? 

});

export default async function handler(
    req: NextApiRequest , 
    res: NextApiResponse
    ) {
  try {
    await client.connect();

    switch (req.method) {
      case 'GET':
        // should this be template or specific chat logs ? 
        break;
      case 'POST':
        // logic goes here
        break;
      default:
        res.status(405).json( { message: 'Method not allowed' } );
        
    }    await client.end();
  } catch (error) {
    console.error(error);
    res.status(500).json( { message: 'Internal server error' } ) ;
    // specify more errors
  }
  // Send a response based on the processing results
  res.status(200).json({ message: 'Success!' }); 
}
/*

'use client'
 
import { useState } from 'react';
import { getServerSideProps } from 'next/dist/build/templates/pages'; 
import './env.local'

interface Chat {
    chat: string | number | boolean ;
}

export default function GET():any {
    const [ data, setData ] = useState<any>("questions about your project are free!")
    const [ isLoading, setIsLoading ] = useState( true )

    getServerSideProps( ( ):any => {
 
        const fetchData = async () => {

          setIsLoading( true );

          const response = await fetch( ' POSTGRES_URL ' );

          const data = await response.json(); 

          setData( data );

          setIsLoading( false );

        };  return (
            <>
                { isLoading ? ( <p>Loading...</p> ): (

                        <p> Data: {JSON.stringify( data ) } </p>

                    )   
                }
            </>
            )    
        } 
    ) 
} 
*/
