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
    `insert into persons (name, age, city) values (
        '${data.name}', ${data.age}, '${data.city}'
    )`,
    function(err, res){
        if(err)console.log(err);
        else console.log(res);
    }
)

connection.query(
    `select * from persons`,
    function(err, res){
        if(err)console.log(err);
        else console.log(res);
        connection.close();
    }
)