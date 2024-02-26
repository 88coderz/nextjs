// https://nextjs.org/docs/app/api-reference/file-conventions/route

// https://nextjs.org/docs/app/api-reference/functions/next-request

import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

interface Request {
   ticket_num:   number;
   created_at:   string;
   user:         string;
   client_id:    string;
   category:     string;   
   completed:    boolean;
   privatePost:  boolean;

}

interface Response {

   
}
 
export async function POST(

   request:  NextRequest   | Request, 
   response: NextResponse  | Response,

   ) {

  try {
   const result = await sql ` CREATE TABLE Ticket ( 
      ticket_num  varchar ( 255 ) ,
      created_at  varchar ( 255 ) , 
      user        varchar ( 255 ) , 
      client_id   varchar ( 255 ) , 
      category    varchar ( 255 ) ,
      completed   varchar ( 255 ) ,
      privatePost varchar ( 255 ) ,

      ); ` ; 

      return  NextResponse.json( { result } ,  { status: 200 }  ) ;

  }   catch ( error ) {          
     return NextResponse.json( { error }, { status: 500 } );    
   } 
};

