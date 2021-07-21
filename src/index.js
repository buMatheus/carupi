//instanciando meus modulos
const express = require('express');
const bodyParser = require('body-parser');
//utilizando express
const app = express();
//utilizando parametros com json e encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//rota teste
/*app.get('/',(req, res)=>{
    res.send('ola');
})*/

require('./controllers/carController')(app);

app.listen(3000);