# Person data table
A learning project about handling SQL with NodeJS.
This project revolves around handling a table in a SQL database with values of the table being (id: primary_key, name: varchar, age: integer, city: varchar).

## Functionality
There are 2 landing pages -
1) '/' - You can add an entry and/or remove entries from the table that get's updated dynamically with the help of client-side javascript that retrieves data from server and refreshes the output table accordingly.
2) '/pages' - An output table is shown and 2 buttons that open corresponding pages to handle insertion and deletion of data, the rendering is handled by handlebars.

## Usage
Create a persons table using the create_table.js file inside the 'scr_mysql' folder after changing the necessary credentials.
Finally, change your credentials inside db.js and open the necessary port.

## Expandability
Front-end can be added to the webapp more appealing.
