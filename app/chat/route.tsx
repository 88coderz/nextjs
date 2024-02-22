'use client'
 
import { useState } from 'react';
import { getServerSideProps } from 'next/dist/build/templates/pages'; 
import './env.local'

interface Chat {
    chat: string | number | boolean ;
}

export default function Chat():any {
    const [data, setData ] = useState<any>("questions about your project are free!")
    const [isLoading, setIsLoading] = useState( true )

    getServerSideProps( ():any => {
 
        const fetchData = async () => {

          setIsLoading( true );

          const response = await fetch( 'POSTGRES_URL' );

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

