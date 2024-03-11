//  CONNECT 
//  CHECK 
//  CREATE 
import { sql } from '@vercel/postgres' ; //creates pooled connection to db
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@vercel/postgres' ; 
import '.env.local' ; 

export default async function handler( // CHECK

  req: NextRequest | Request , 
  res: NextResponse<any> | Response,
  userExists: boolean , 

  ) {  switch ( req.method , res ) {

      case 'GET':  
      // verification that user doesn't exist WHERE username = $1 *OR* userExists = false ' , [userExists])
        let user = await sql`SELECT * FROM Users`
        const userExists= await User.query(' ')

      break;

      case 'POST': // new user info then new NewUserForm(NewSingleUser.data)
      
      if (!userExists) {  

        const newUser = createClient( /* { connectionString: process.env.POSTGRES_URL } */ ) ;
        newUser.connect();  

        const newUserData = await sql ` CREATE TABLE NewUser ( 
          name             VARCHAR ( 255 ) NOT NULL , 
          email            VARCHAR ( 255 ) NOT NULL ,
          phone-num        VARCHAR ( 255 ) NOT NULL ,
          client_id        INT NOT NULL PRIMARY KEY ,
          is_new_user      BOOLEAN NOT NULL DEFAULT TRUE ) ; ` ;

          // ( createdNewUser ? VerifiedDataReturn : ErrorCode )

          return NextResponse.json( { newUser }, { status: 200 } );

        };

      break;
      default:          
  }
}