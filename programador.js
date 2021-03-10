//const EventEmitter = require('events');
const EventEmitter = require('./events.js');

// Importar modulo Later.js:
const later = require('later');



class Programador extends EventEmitter {

    constructor (lista){
        super();
        
        this.horario=lista;
        let i = 0;
       

    }


    prueba(){
        // Usar zona horaria local:
        later.date.localTime();

        let i = 0;

        this.horario.forEach((element, index) => {

            //console.log("Planificación nº" + index + ": Modificando temperatura ideal a " + element.temperatura + "ºC");
            later.setInterval(() => {

                
                this.emit('ideal', element.temperatura);
                //console.log("Planificación nº" + index + ": Modificando temperatura ideal a " + element.temperatura + "ºC");
            }, later.parse.text('at ' + element.hora));
        });
        
    }

}

exports = module.exports = Programador