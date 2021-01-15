const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'mypass',
    database: 'mytestdb'
});

var data = {
    name: process.argv[2],
    age: parseInt(process.argv[3]),
    city: process.argv[4]
}

connection.query(
    `select * from persons`,
    function(err, rows, cols){
        if(err)console.log(err);
        else{
            console.log(cols);
            console.log(rows);
            // console.log(fields);
        }
        connection.close();
    }
)