class Quest1 {
    constructor(num, den){
        this.numerador = num,
        this.denominador = den
    }
    multiplicacao(obj){
        this.numerador*=obj.numerador;
        this.denominador*=obj.denominador;
        return this.numerador + "/" + this.denominador;
    }
    divisao(obj){
        this.numerador *= obj.denominador;
        this.denominador *= obj.numerador;
        return this.numerador + "/" + this.denominador;
    }

}
export default Quest1;