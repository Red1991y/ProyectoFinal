export class educacion {
    idEdu?: number;
    nombreEdu: String;
    fecha: String;
    descEdu: String;

    constructor(nombreEdu: String, descEdu: String, fecha : String ) {
        this.nombreEdu=nombreEdu;
        this.descEdu=descEdu;
        this.fecha=fecha;
    }

}