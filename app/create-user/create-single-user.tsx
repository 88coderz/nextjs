// https://www.typescriptlang.org/docs/handbook/2/classes.html
    class NewSingleUser {         
        location: string;
        auth: boolean;
        associatedTickets: boolean;
        avitar: boolean;
        userName: string;
//  super(): any ;  <<<< when is super() applied ????
    constructor (
        location = 'Austin, Texas',
        auth = false,
        associatedTickets = false,
        avitar = false,
        userName = 'New User',
    ) {
        this.location = location,
        this.auth = auth,
        this.associatedTickets = associatedTickets,
        this.avitar = avitar ,
        this.userName = userName ;                 
        }      
    }    
// https://vercel.com/docs/storage/vercel-postgres/sdk#createclient
import type { NextApiRequest , NextApiResponse } from 'next';
import { createClient } from '@vercel/postgres' ; 
import '.env.local' ;
// Individual clients can be created, connected, and disconnected for each query. This method is less efficient than using db and should only be used when a single client is required.
let newUser = new NewSingleUser( 

  

)
const client = new createClient({ 
  dbConnection = POSTGRES_URL 
}) ;

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


