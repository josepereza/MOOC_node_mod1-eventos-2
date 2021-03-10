const Habitacion = require('./habitacion');
const Climatizador = require('./climatizador');
const Termostato = require('./termostato');
const Programador = require('./programador.js');


//

let horas=[
    { hora: "09:45",
      temperatura: 22
    },
    { hora: "09:46",
      temperatura: 18
    },
    { hora: "18:00",
      temperatura: 22
    },
    { hora: "23:00",
      temperatura: 20
    }
  ];

 

const programa = new Programador(horas);
programa.prueba();

// Creamos una habitacion:
const dormitorio = new Habitacion();
dormitorio.temperatura = 22;

// Creamos un climatizador para la habitacion:
const climatizador = new Climatizador(dormitorio);

// Creamos un Termostato que mira la temperatura de la habitacion:
const termostato = new Termostato(dormitorio);

// Configuramos el termostato para controlar la temperatura:
termostato.on('muchofrio', () => climatizador.calentar());
termostato.on('muchocalor', () => climatizador.enfriar());
termostato.on('muchofrio',()=>termostato.indicarTemperaturaIdeal(20));
programa.on('ideal', (tempera) =>{
  console.log(`mi temperatura ${tempera}-------------------ºC`);
  termostato.temperaturaIdeal=tempera;
  //dormitorio.temperatura=tempera;
})

// Mostar la temperatura periodicamente:
termostato.on('tic', (temp) => console.log(`${temp.toFixed(1)}ºC`));

// Configurar la temp ideal a 20 grados:
termostato.indicarTemperaturaIdeal(20);

// Encender el termostato:
termostato.encender();
