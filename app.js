'use strict';

const express = require('express');
const app = express();

app.use(express.static('webapp'));
//local testing:
/*
app.listen(8080, () => {
    console.log(`App listening at http://localhost:8080`)
});
*/

//live:
//*
app.listen(process.env.PORT || 3000, function(){
    console.log("Example app listens on port 3000.");
    console.log('App listening at http://localhost:3000');
});
//*/