import ListaDuplamenteLigada from "../ED/ListaDuplamenteLigada"
import Lista from "../ED/Lista"

class Quest8 {
    constructor(lista){
        this.listaDupla = new ListaDuplamenteLigada();
        this.listaS = lista;
    }

    converterLista(){
        let tmp = this.lista.head.proximo;
        while(tmp.proximo !== null){
            this.listaDupla.append(tmp.dado);
        }
        return this.listaDupla;
    }
}

export default Quest8;