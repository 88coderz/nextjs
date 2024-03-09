import { sql } from '@vercel/postgres' ;
import { NextRequest, NextResponse } from 'next/server';
 
export async function POST (
    request:   NextRequest  | Request  , 
    response:  NextResponse | Response ,
  ) { try { const newUser = await sql ` CREATE TABLE User ( 
      name             VARCHAR ( 255 ) NOT NULL , 
      email            VARCHAR ( 255 ) NOT NULL ,
      phone-num        VARCHAR ( 255 ) NOT NULL ,
      client_id        INT NOT NULL PRIMARY KEY ,
      is_new_user      BOOLEAN NOT NULL DEFAULT TRUE );`;       
return NextResponse.json( { newUser }, { status: 200 } );
  } catch ( error ) {    
    return NextResponse.json( { error }, { status: 500 } );
  } }; // defining datatypes of nextREQ & nextRES 

interface Request {
  current_user:  boolean;
  created_at:    string;
  user:          string;
  client_id:     string;
  location:      string;
}
interface Response {
  current_user:  boolean;
  created_at:    string;
  user:          string;
  client_id:     string;
  location:      string;
} // https://vercel.com/docs/storage/vercel-postgres/sdk#createclient
import { createClient } from '@vercel/postgres' ; 
import '.env.local' ;

const newUser = createClient( /* { connectionString: process.env.POSTGRES_URL } */ ) ;

export default async function handler(
    req: NextRequest , res: NextResponse ,
    userExists: boolean , 
    ) { try { await newUser.connect();    
    switch (req.method) {
      case 'GET':  // verification that user doesn't exist 
        const userName = await newUser.query('SELECT 1 FROM users WHERE username = $1', [userExists])
        break;
      case 'POST':
        // new user info
        if (!userExists) { newUser };
        break;
      default:        
    } } finally { newUser.end(); } }