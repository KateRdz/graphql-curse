export const resolvers={
    
    Query:{
        hello: () =>{
            return 'Hello World GraphQL'
        },
        greet:(root,args)=>{
            console.log(args.name);
            return `Hello ${args.name}!`;
        }
        
        }
    
    };
