import Lista from "../ED/Lista";
class Quest9{
    constructor(){
        this.lista = new Lista();
    }

    append(nome, idade){
        if(isNaN(nome) && !isNaN(idade)){
            dado = [nome,idade]
            this.lista.append(dado);
        }else{
            return false;
        }
    }
    copyList(){
        let tmp = this.lista.head.proximo;
        let aux = [], i = 0;
        while(tmp.proximo !== null){
            aux[i++] = tmp.dado;
        }
        return aux;
    }

    orderAge(){
        let aux = new Lista();
        let vetor = this.copyList();
        let tmp;
        for(let i = 0; i < vetor.length; i++){
            for(let j = 0; i < vetor.length; j++){
                if(vetor[i].idade < vetor[j].idade){
                    tmp = vetor[i];
                    vetor[i] = vetor[j];
                    vetor[j] = tmp;
                }
            }
        }
        tmp = 0;
        while(tmp < vetor.length){
            aux.append(vetor[tmp++]);
        }
        return aux;
    }
    

    
}
