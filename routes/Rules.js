const express = require("express");
const router = express.Router();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db/db.json');
const db = low(adapter);

router.get('/', (req, res) => {
    const rules = db.get('Rules').value();
    res.send(rules);
});


router.post('/add', (req, res) => {
    const rulerdata = {
        id:req.body.id,
        date:req.body.date,
        start:req.body.start,
        end:req.body.end
    }

    db.get('Rules')
    .push(rulerdata)
    .last()
    .write()
    res.send('post ok')
});

router.put('/update/:id', (req, res) => {
    const getid = req.params.id;
    const userid = db.get('Rules').find(getid).value();
    const rulerdata = {
        id:req.body.id,
        date:req.body.date,
        start:req.body.start,
        end:req.body.end
    }

    db.get('Rules')
    .find(userid)
    .last()
    .assign(rulerdata)
    .write()
    res.send('post ok')
});

router.delete('/delete/:id', (req, res) => {
    const getid = req.params.id;
    const userid = db.get('Rules').find(getid).value();
    db.get('Rules')
    .remove(userid)
    .value()
    res.send('delete ok')
});

module.exports = router;