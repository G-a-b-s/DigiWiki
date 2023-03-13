const Tables = require('./infrasctructure/tables');
const connection = require('./infrasctructure/connection');

connection.connect((error)=>{
    if(error){
        console.log(error)
    }
    else{
        Tables.init(connection);
    }
        
})

