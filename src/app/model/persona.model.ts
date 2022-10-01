export class users{
    id?: number;
    name: String;
    surname: String;
    email: String;
    enabled?: boolean;

    constructor(name: String,surname: String, email:String){
        this.name = name;
        this.surname = surname;
        this.email = email;
    }
}