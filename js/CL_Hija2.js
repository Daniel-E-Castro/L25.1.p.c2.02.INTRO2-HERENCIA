import CL_Padre from "./CL_Padre.js";

export default class CL_Hija2 extends CL_Padre{
    constructor(atribA, atrib2){
        super(atribA);
        this.atrib2 = atrib2;
    }

    metodo2(){
        return this.atribA + this.atrib2;
    }
}