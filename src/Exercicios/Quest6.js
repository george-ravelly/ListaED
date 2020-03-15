import Fila from "../ED/Fila";
class Filadupla{
    constructor(t = 10){
        this.fila = new Fila(t);
	}
	//enqueue_fim === enqueue padrão da fila
	//dequeue_inicio === dequeue padrão
    
    enqueue_inicio(dado){
        let aux = new Fila(this.fila.maxSize);
        this.fila.enqueue(dado);
        while(this.fila.size() != 1){
            aux.enqueue(this.fila.dequeue());
        }
        while(aux.size() != 0){
            this.fila.enqueue(aux.dequeue());
        }
    }

    dequeue_fim(){
        let aux = new Fila(this.fila.maxSize);
        while(this.fila.size() != 0){
            aux.enqueue(this.fila.dequeue());
        }
        while(aux.size() != 1){
            this.fila.enqueue(aux.dequeue());
        }
        return aux.dequeue();
        
    }

}

export default Filadupla;