import Fila from "../ED/Fila"
class Clinica{
    constructor(size = 10){
        this.filaEspera = new Fila(size);
        this.paciente = new Fila(size);
        this.atendente = new Fila(3);
    }

    entrar_na_fila(dados){
        this.filaEspera.enqueue(dados);
    }

    receber_senha(){
        this.paciente.enqueue(this.filaEspera.dequeue());
    }

    atender_paciente(){
        let flag = false;
        while(!this.paciente.isEmpty() && !this.atendente.isFull()){
            this.atendente.enqueue(this.paciente.dequeue());
            flag = true;
        }
        return flag;
    }

    paciente_atendido(){
        if(this.atendente.isEmpty()){
            throw new Error("Fila Vazia!");
        }else{
            while(!this.atendente.isEmpty()){
                this.atendente.dequeue();
                console.log("entrou")
            }
        }
    }

}

export default Clinica;