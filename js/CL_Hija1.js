import CL_Padre from "./CL_Padre.js";

export default class CL_Hija1 extends CL_Padre{
    constructor(atribA, atrib1){
        super(atribA);
        this.atrib1 = atrib1;
    }

    metodo1(){
        return this.atribA * this.atrib1;
    }
}