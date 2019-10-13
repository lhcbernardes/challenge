const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;
const userRour = require("./routes/Users");
const ruleRouter = require("./routes/Rules.js");

const app = express();
app.use(bodyParser.json());
app.use('/api/user', userRour)
app.use('/api/rules', ruleRouter)

app.listen(port,()=> console.log(`Server app listening on http://127.0.0.1:${port}!`));