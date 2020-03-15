import Pilha from "../ED/Pilha";
class Inversor{
    constructor(t = 10){
        this.inicial = new Pilha(t),
        this.final = new Pilha(t)
    }

    inversor(){
        let aux = new Pilha(this.inicial.maxSize);
        this.final.push(this.inicial.pop());
        while(this.inicial.size() != 1){
            aux.push(this.inicial.pop());
        }
        while(aux.size() >= 1){
            this.final.push(aux.pop());
        }
        this.final.push(this.inicial.pop());
    }
}

export default Inversor;