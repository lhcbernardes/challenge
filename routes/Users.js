const express = require("express");
const router = express.Router();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db/db.json');
const db = low(adapter);

router.get('/', (req, res) => {
    const users = db.get('Users').value();
    res.send(users);
});

router.post('/add', (req, res) => {
    const userdata = {
        id:req.body.id,
        name:req.body.name,
        date:req.body.date,
        time:req.body.time
    }
    const n = db.get('Rules').find({ date: userdata.date}).value();

    if(db.get('Rules').filter( db.get('Rules').map('start').value() < userdata.time && userdata.time < db.get('Rules').map('end').value()).value())
    {
        if(n)
        {
            db.get('Users')
            .push(userdata)
            .last()
            .write()
            res.send('post ok')
        }
        else{
            res.send('dia indisponivel')
        }
    }
    


});

router.put('/update/:id', (req, res) => {
    const getid = req.params.id;
    const userid = db.get('Users').find(getid).value();
    const userdata = {
        id:req.body.id,
        name:req.body.name,
        date:req.body.date,
        time:req.body.time
    }

    db.get('Users')
    .find(userid)
    .last()
    .assign(userdata)
    .write()
    res.send('post ok')
});

router.delete('/delete/:id', (req, res) => {
    const getid = req.params.id;
    const userid = db.get('Users').find(getid).value();
    db.get('Users')
    .remove(userid)
    .value()
    res.send('delete ok')
});

module.exports = router;