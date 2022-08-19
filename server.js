const express = require('express');
const db = require('./config/connection');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });



// const { MongoClient } = require('mongodb');

// async function main() {


//     const client = new MongoClient(uri);

//     try {

//         await client.connect();

//         await listDatabases(client);

//     } catch (err) {

//         console.log(err);

//     } finally {

//         await client.close();

//     }
// }

// main().catch(console.error);

// async function listDatabases(client) {

//     const databasesList = await client.db().admin().listDatabases();
    
//     console.log('Databases:');
//     databasesList.databases.forEach(db => {
//         console.log(`- ${db.name}`);
//     })

// }
 