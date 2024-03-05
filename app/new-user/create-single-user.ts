
// https://www.typescriptlang.org/docs/handbook/2/classes.html

    class NewSingleUser {   

        location: string;
        auth: boolean;
        associatedTickets: boolean;
        avitar: boolean;
        email: string ;
        userName: string;

//  super(): any ;  <<<< when is super() applied ????

    constructor (
        location = 'Austin, Texas',
        auth = false,
        associatedTickets = false,
        avitar = false,
        email = 'insert@email.com',
        userName = 'New User',

    ) {

        this.location = location,
        this.auth = auth,
        this.associatedTickets = associatedTickets,
        this.avitar = avitar ,
        this.email = email , 
        this.userName = userName ;    
        }      

    }    

// https://nextjs.org/docs/app/building-your-application/routing

// https://nextjs.org/docs/app/api-reference/file-conventions/route

// https://nextjs.org/docs/app/api-reference/functions/next-request

// https://vercel.com/docs/storage/vercel-postgres/sdk#createclient
