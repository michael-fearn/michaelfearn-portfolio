const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.static( __dirname+'/build'))

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})