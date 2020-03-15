import Lista from "../ED/Lista";

class Quest5{
    constructor(){
        this.lista = new Lista();
    }

    embaralhar(){
        let tmp = [];
        let i = 0;
        while(!this.lista.isEmpty()){
            tmp[i++] = this.lista.removeBeginning();
        }
        for(let i = tmp.length; i; i--){
            const indAleatorio = Math.floor(Math.random() * i);
            const dado = tmp[i-1];

            tmp[i-1] = tmp[indAleatorio];
            tmp[indAleatorio] = dado;
        }
        i = 0;
        while(i<tmp.length){
            this.lista.add(tmp[i++]);
        }
    }
    toString(){
        return this.lista.toString();
    }
}
export default Quest5;