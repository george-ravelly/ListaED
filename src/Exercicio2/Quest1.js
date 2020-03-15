import Lista from "../ED/Lista";

class Quest1 {
    constructor(){
        this.lista = new Lista(); 
    }

    push(dado){
        this.lista.append(dado);
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Underflow");
        }else{
            return this.lista.removeEnd();
        }

    }
    top(){
		let tmp = this.lista.head.proximo;
		while (tmp.proximo !== null) {
			tmp = tmp.proximo;
		}
		return tmp.dado;
    }

    isEmpty(){
        return this.lista.isEmpty();
    }

    size(){
        return this.lista.size();
    }

}

export default Quest1;