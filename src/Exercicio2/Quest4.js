import Lista from "../ED/Lista";

class Quest4 {
    constructor(){
        this.lista = new Lista();
    }

    inverterLista(){
        let tmp = new Lista();
        while(!this.lista.isEmpty()){
            tmp.append(this.lista.removeEnd());
        }
        while(!tmp.isEmpty()){
            this.lista.append(tmp.removeBeginning());
        }
    }
}