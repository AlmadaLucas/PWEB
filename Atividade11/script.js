    var dataVenc;

    this.getJuros = function (){
        return juros;
    }
    this.setJuros = function(jur){
    juros = jur;
    }
    this.getDataVenc = function(){
        return dataVenc;
    }
    this.setDataVenc = function(datav){
        dataVenc = datav;
    
}
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

Jo�oC = new Corrente();
Jo�oP = new Poupanca();
Jo�oC.setbanco('Banco do Jo�o');
Jo�oC.setnumconta('22222');
Jo�oC.setsaldoespecial('333');
Jo�oC.setnomecorr('Jo�o');
Jo�oC.setsaldo('2');

Jo�oP.setbanco('Banco2 do Jo�o');
Jo�oP.setnumconta('23332');
Jo�oP.setJuros('50')
Jo�oP.setnomecorr('Jo�oo');
Jo�oP.setsaldo('5');
Jo�oP.setDataVenc('Amanh�');

console.log(Jo�oC.getbanco()+'\n'+
Jo�oC.getnumconta()+'\n'+
Jo�oC.getsaldoespecial()+'\n'+
Jo�oC.getnomecorr()+'\n'+
Jo�oC.getsaldo()+'\n'+

Jo�oP.getbanco()+'\n'+
Jo�oP.getnumconta()+'\n'+
Jo�oP.getJuros()+'\n'+
Jo�oP.getnomecorr()+'\n'+
Jo�oP.getsaldo()+'\n'+
Jo�oP.getDataVenc());