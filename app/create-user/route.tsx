// https://nextjs.org/docs/app/building-your-application/routing

// https://nextjs.org/docs/app/api-reference/file-conventions/route

// https://nextjs.org/docs/app/api-reference/functions/next-request

import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

interface Request {
  current_user:  boolean;
  created_at:    string;
  user:          string;
  client_id:     string;
  location:      string;
}

interface Response {
  
}
 
export async function POST(

    request:   Request | NextRequest   , 
    response: Response | NextResponse  ,

  ) {
    
  try { const newUser = await sql ` CREATE TABLE User ( 
      name             VARCHAR ( 255 ) NOT NULL , 
      email            VARCHAR ( 255 ) NOT NULL ,
      phone-num        VARCHAR ( 255 ) NOT NULL ,
      client_id        INT NOT NULL PRIMARY KEY ,
      is_new_user      BOOLEAN NOT NULL DEFAULT TRUE ,
      
      );`;    

      return NextResponse.json(
        { newUser }, { status: 200 }  );

  } catch ( error ) {    

    return NextResponse.json(
      { error }, { status: 500 }  );

  }

};