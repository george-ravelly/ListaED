import Pilha from "../ED/Pilha";

class Conversor{
    constructor(){
        this.pilha = new Pilha(8);
    }

    converter(dado){
        for(let i = 0; i < this.pilha.maxSize; i++){
            this.pilha.push(parseInt(dado % 2));
            dado /= 2;
        }
        console.log(this.pilha);
        
    }
}

export default Conversor;