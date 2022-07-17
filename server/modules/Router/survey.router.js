const express = require('express');
const router = express.Router();
const pool = require('../pool');

//GET current feedback in DB
router.get('/', (req, res) => {
    //task for the DB
    const sqlText = `SELECT * FROM "feedback";`;

    pool
        .query(sqlText)
        .then (result => {
            res.send(result.row);
        }).catch(err => {
            console.log('error in router get:', err);
            res.sendStatus(500);
        })

})


router.post('/', (req, res) => {
    const newSurvey = req.body;
    console.log('ratings are:', newSurvey);
//task for the DB
    const sqlText = `
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);
        `;
    pool.query(sqlText,[
        Number(newSurvey.feeling), 
        Number(newSurvey.understanding), 
        Number(newSurvey.support), 
        newSurvey.comments])
        .then((result) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log( 'Error POST to DB:', error);
        res.sendStatus(500);
    });
});

module.exports = router;