'use strict'
const app = require('./src/app')

app.listen(app.get('port'), (error) => {
    if(error){
        console.log(`Ha ocurrido un error ${error}`);
    }else{
        console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
    }
})