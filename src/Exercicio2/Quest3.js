class Quest3{
    constructor(){
        this.dados = [];
    }

    add(dado){
        if(this.isEmpty){
            this.dados[this.dado.length] = dado;
        }else{
            let aux = [];
            aux[0] = dado;
            for(let i = 0; i < this.size(); i++){
                aux[i+1] = this.dados[i];
            }
            this.dados = aux;
        }
    }

    append(dado){
        this.dados[this.dado.length] = dado;
    }

    removeBeginning(){
        if(this.isEmpty()){
            return false;
        }else{
            let aux = [];
            let tmp = this.dados[0];
            for(let i = 1; i < this.dados.length; i++){
                aux[i-1] = this.dados[i];
            }
            this.dados = aux;
            return tmp;
        }
    }

    removeEnd(){
        if(this.isEmpty()){
            return false;
        }else{
            let aux = [];
            let tmp = this.dados[this.size()-1]
            for(let i = 0; i < this.size()-1; i++){
                aux[i] = this.dados[i];
            }
            this.dados = aux;
            return tmp;
        }
    }

    isEmpty(){
        return this.dados.length === 0;
    }

    size(){
        return this.dados.length;
    }

    addAt(posicao, dado){
        let aux = []
        let i = 0;
        let j = 0;
        while(i < this.size()){
            if(j === posicao){
                aux[j] = dado;
                j++;
            }else{
                aux[j] = this.dados[i];
                i++;
                j++;
            }
        }
        this.dados = aux;
    }
    removeMiddle(posicao, dado){
        let aux = [];
        let i = 0;
        let j = 0;
        while(j < this.size()){
            if(j === posicao && this.dado[j] === dado){
                j++;
            }else{
                aux[i] = this.dados[j];
                i++;
                j++;
            }
        }
        this.dados = aux;

    }

    search(dado){
        for(let i = 0; i < this.size(); i++){
            if(this.dados[i] === dado)
                return true;
        }
        return false;
    }
}