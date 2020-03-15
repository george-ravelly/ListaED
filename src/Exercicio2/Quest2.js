import Lista from "../ED/Lista"
class Fila{
    constructor(){
        this.lista = new Lista();
    }

    enqueue(dado){
        this.lista.append(dado);
    }
    dequeue(){
        return this.lista.removeBeginning();
    }
    size(){
        return this.lista.size();
    }
    isEmpty(){
        return this.lista.isEmpty();
    }
    front(){
        let tmp = this.lista.head.proximo;
        return tmp.dado;
    }
}