import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

interface Request {

   ticket_num: number;
   created_at: string;
   user: string;
   date: number; 
   category: string;
   
   completed: boolean;
}
 
export async function GET(request: Request) {

  try {

     const    result = await    sql `CREATE TABLE Ticket ( client-id varchar(255) , ticket-num varchar(255) ); ` ; 

      return  NextResponse.json( { result } ,  { status: 200 }  ) ;

  }   catch (error) {       
   
     return NextResponse.json( {error}, {status: 500} ); 
   
   }  finally ( ) {

      return()

   }
   
};


