//  CONNECT 
//  CHECK 
//  CREATE 
import { sql } from '@vercel/postgres' ; //creates pooled connection to db
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@vercel/postgres' ; 
import '.env.local' ; 
export default async function handler( 
  req: NextRequest | Request , 
  res: NextResponse<any> | Response,
  userExists: boolean 
  ) {  
     switch ( req.method ) { 
      case 'GET':  // CHECK
      // verification that user doesn't exist 
      // WHERE username = $1 *OR* userExists = false, [userExists])
        let Users = await sql`SELECT * FROM Users`
        const userExists= await Users.query(' ') ;
    break;
      case 'POST': 
      // new user info then new NewUserForm(NewSingleUser.data)  
      if (!userExists) {  
        const newUser = createClient() ; // NON-POOLING
        await newUser.connect();  //    CONNECT
          const newUserData = await newUser.sql` INSERT INTO users ( $newUserName , $newUserEmail , $firstName , $lastName ) VALUES (
          $1 , $2 , $3 , $4 ) ; ` ;

          // ( createdNewUser   ?   VerifiedDataReturn : ErrorCode )
          return NextResponse.json( { newUser }, { status: 200 } ); 
          //  console.table ( newUserData )
    };    break;   default:          
  } 
}  
/*
            name             TEXT NOT NULL , 
            email            TEXT NOT NULL ,
            phone-num        TEXT NOT NULL ,
            client_id        INT NOT NULL PRIMARY KEY ,
            is_new_user      BOOLEAN NOT NULL DEFAULT TRUE 
*/