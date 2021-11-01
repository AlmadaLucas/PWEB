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

JoãoC = new Corrente();
JoãoP = new Poupanca();
JoãoC.setbanco('Banco do João');
JoãoC.setnumconta('22222');
JoãoC.setsaldoespecial('333');
JoãoC.setnomecorr('João');
JoãoC.setsaldo('2');

JoãoP.setbanco('Banco2 do João');
JoãoP.setnumconta('23332');
JoãoP.setJuros('50')
JoãoP.setnomecorr('Joãoo');
JoãoP.setsaldo('5');
JoãoP.setDataVenc('Amanhã');

console.log(JoãoC.getbanco()+'\n'+
JoãoC.getnumconta()+'\n'+
JoãoC.getsaldoespecial()+'\n'+
JoãoC.getnomecorr()+'\n'+
JoãoC.getsaldo()+'\n'+

JoãoP.getbanco()+'\n'+
JoãoP.getnumconta()+'\n'+
JoãoP.getJuros()+'\n'+
JoãoP.getnomecorr()+'\n'+
JoãoP.getsaldo()+'\n'+
JoãoP.getDataVenc());