import Fila from "../ED/Fila";
class Pilhafila{
    constructor(t = 4){
        this.fila = new Fila(t);
        this.aux = new Fila(t);
    }

    push(newData) {
      if (this.isFull()) {
        throw new Error("Overflow");
      }else{
        this.fila.enqueue(newData);
      }
    }
    
    pop() {
      if (this.isEmpty()) {
        throw new Error("Underflow");
      }else {
        while(this.fila.size() != 1){
          this.aux.enqueue(this.fila.dequeue());
        }

        while(this.aux.size() != 0){
          this.fila.enqueue(this.aux.dequeue());
        }

        return this.fila.dequeue();
      }
    }

}

export default Pilhafila;