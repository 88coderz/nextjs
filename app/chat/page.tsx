import { useState , useEffect } from 'react';


interface Chat {
    chat: string;
}


export default function Chat() {
    const [data, setData ] = useState<any>("questions about your project are free!")
    const [isLoading, setIsLoading] = useState(true)

    useEffect( ():any => {

        const fetchData = async () => {

          setIsLoading(true);

          const response = await fetch('/api/data');

          const data = await response.json();

          setData(data);

          setIsLoading(false);

        };  return (
            <>
                { isLoading ? (
                    <p>Loading...</p>
                    ): (
                        <input className="fixed bottom-0 left-0 flex h-8 w-full items-end justify-center text-lg bg-gradient-to-t from-white via-white dark:from-black dark:via-black" >
                            <p> Data: {JSON.stringify( data ) } </p>
                        </input>

                    )   
                }

            </>
            )    
        } 
    ) 
} 

