const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'mypass',
    database: 'mytestdb'
});

connection.query(
    `create table if not exists persons(
        id integer auto_increment primary key,
        name varchar(50) not null,
        age integer not null,
        city varchar(40)
    )`,
    function(err, res){
        if(err)console.log(err);
        else console.log(res);
        connection.close();
    }
)