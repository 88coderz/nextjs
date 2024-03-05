import { sql } from '@vercel/postgres' ;
import { NextRequest, NextResponse } from 'next/server';
 
export async function POST (
    request:   NextRequest  | Request  , 
    response:  NextResponse | Response ,
  ) {    
  try { const newUser = await sql ` CREATE TABLE User ( 
      name             VARCHAR ( 255 ) NOT NULL , 
      email            VARCHAR ( 255 ) NOT NULL ,
      phone-num        VARCHAR ( 255 ) NOT NULL ,
      client_id        INT NOT NULL PRIMARY KEY ,
      is_new_user      BOOLEAN NOT NULL DEFAULT TRUE ,      
      );`;    
      return NextResponse.json (
        { newUser }, { status: 200 }  );
  } catch ( error ) {    
    return NextResponse.json (
      { error }, { status: 500 }  );
  }
};

// https://vercel.com/docs/storage/vercel-postgres/sdk#createclient

import { createClient } from '@vercel/postgres' ; 
import '.env.local' ;
// Individual clients can be created, connected, and disconnected for each query. This method is less efficient than using db and should only be used when a single client is required.

const client = createClient( { connectionString: process.env.POSTGRES_URL } ) ;

export default async function handler(
    req: NextRequest , 
    res: NextResponse
    ) {  try { await client.connect();

    switch (req.method) {
      case 'GET':
        // should this be template or specific chat logs ? 

        break;
      case 'POST':
        // logic goes here

        break;
      default:
        
    }    await client.end();
  } catch (error) {  console.error(error);  }
}
