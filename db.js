const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'mypass',
    database: 'mytestdb'
});

function getall(){
    return new Promise(function(resolve, reject){
        connection.query(
            `select * from persons`,
            function(err, rows, cols){
                if(err)reject(err);
                else resolve(rows);
            }
        )
    })
};

function putin(name, age, city){
    return new Promise(function(resolve, reject){
        connection.query(
            `insert into persons (name, age, city) values (?, ?, ?)`,
            [name, age, city],
            function(err){
                if(err) reject(err);
                else resolve();
            }    
        )
    })
};

function delfrom(name){
    return new Promise(function(resolve, reject){
        connection.query(
            `delete from persons where name = ?`,
            [name],
            function(err){
                if(err)reject(err);
                else resolve();
            }
        )
    })
}

module.exports = {get: getall, put: putin, del: delfrom};