// https://www.typescriptlang.org/docs/handbook/2/classes.html

    class NewUser {
        
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
    




