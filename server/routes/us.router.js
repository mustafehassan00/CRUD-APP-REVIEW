const express = require('express');
const pool = require('../modules/pool.js');

const router = express.Router();


// GET /things - - - - - - - Respond with all the things.

// STEP 2: make a route that will connect with your getAndRenderDB on the client.
router.get('/', (req,res) => {
    // STEP 3: console.log the router to see if it is working 
    console.log('router is online');
// STEP 5: create a variable to grab the db data
   let sqlText=`SELECT * FROM "us"`

//STEP 6: do a pool.query() to grab the db data and send it
//        to the GET
   pool.query(sqlText)
   //STEP 7: .then() means now it has grabbed the db but it needs to be in 
   //         a variable. Then we grab the rows of the dbResult and grab its rows
   .then((dbResult) => {

    //STEP 8: check to see if the .then is connected by console.logging it
        res.send(dbResult.rows);
        console.log('.then is working and online and that dbResult works', dbResult.rows)
        
        
   })
})
// GET /us/:id - - - - - Respond with one thing.

// POST /us - - - - - -  Create one thing.

// DELETE /us/:id - - -  Delete one thing.

// PUT /us/:id - - - - - Update one thing.


module.exports = router;
