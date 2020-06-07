import knex from 'knex';
import path from 'path'


// const connectionPG = knex({
//     client: 'pg',
//     connection : process.env.PG_CONNECTION_STRING,
//     searchPath: ['knex', 'public'],

// });

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname,'database.sqlite')

    },
});

export default connection;
