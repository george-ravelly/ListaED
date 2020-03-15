import Lista from "../ED/Lista";

class Quest6 {
    constructor(){
        this.lista = new Lista();
    }

    addString(texto){
        for(let i = 0; i < texto.length; i++){
            this.lista.append(texto[i]);
        }
    }
    subString(a, b){
        let aux = new Lista();
        let cont = 0;
        let tmp = this.lista.head.proximo;
        //Testa se a lista esta vazia e se os indices sao invalidados.
        if(this.lista.isEmpty() && a < 0 && b > this.lista.size()){
            return false;
        }else{
            //percorre o laço ate 
            while (cont < b) {
                if(cont >= a-1 && cont < b){
                    aux.append(tmp.dado);
                }
                tmp = tmp.proximo;
                cont++;
            }
            return true;
        }

    }
}
export default Quest6;