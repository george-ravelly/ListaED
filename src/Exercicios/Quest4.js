import Pilhafila from "./Quest3";

class Filapilha{
    constructor(t = 10){
        this.pilha = new Pilhafila(t);
        this.aux = new Pilhafila(t);
    }

    enqueue(dados){
        if(this.isFull()){
            throw new Error("Overflow");
        }else{
            this.pilha.push(dados);
        }
        
    }
    
    dequeue(){
        if(this.isEmpty()){
            throw new Errpr("Underflow");
        }else{
            if(this.pilha.isEmpty() !== 0){
                while(this.pilha.size() != 0){
                    this.aux.push(this.pilha.pop());
                }
                return this.aux.pop();
            }
            while(this.aux.size() != 0){
                this.pilha.push(this.aux.pop());
            }

            return this.pilha.pop();
        }
    }

    size(){
        return this.pilha.size();
    }

    isEmpty(){
        return this.pilha.isEmpty() && this.aux.isEmpty();
    }

    isFull(){
        return this.pilha.isFull();
    }
}
export default Filapilha;