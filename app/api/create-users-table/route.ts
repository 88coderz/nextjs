import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

interface Request {
  created_at: string;
  user:       string;
  client_id:  string;
  location:   string;

}

interface Response {
  
}
 
export async function POST(
    request: Request   , 
    response: Response ,
  ) {
  try {
    const newUser = await sql`CREATE TABLE User ( 
      Name varchar(255), Contact_info varchar ( 255 ) );`;    
      return NextResponse.json({ newUser }, { status: 200 });

  } catch ( error ) {    
    return NextResponse.json({ error }, { status: 500 });

  }

};