export class proyecto {
     id? : number;
	 nombreP : string;
	 imagenP? : string;
	 descripcionP : string;

     constructor(nombreP: string, descripcionP : string) {
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
     }
    }