export class usuario{
    id?: number;
    nombre: String;
    apellido: String;
    titulo: String;
    descripcion: String;
    fotoPerfil: String;
    email: String;

    constructor(nombre: String,apellido: String, titulo: String, descripcion: String, fotoPerfil: String, email: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fotoPerfil = fotoPerfil;
        this.email = email;
    }
}