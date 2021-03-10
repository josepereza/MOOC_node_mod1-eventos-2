class EventEmitter{
    escuchadores=[];
    on(evento,metodo){
        // Para cuando ya existe el evento solamente añade el método
        var encontrado = false;
        this.escuchadores.forEach((campo) => {               
            if (evento==campo.ev){     
                encontrado=true;
                campo.met.push(metodo);
            }                                    
        });        

        if (!Boolean(encontrado)){
            console.log(evento);
            this.escuchadores.push ({ev:evento,met:[metodo]});
        }
        

    }
    emit(ev,args){
        this.escuchadores.forEach((campo) => {
            //console.log("Inicial-"+ev+"-pasado-"+campo.ev+"-");
            if (ev==campo.ev){               
                campo.met.forEach((meto) => {
                    meto(args);
                });                
            }
        });
        
    }
        
}
exports = module.exports = EventEmitter;

