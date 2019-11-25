export class Usuario{
    nome: string;
    id: number;
    credencial: string;
}

export class Chave{
    titulo: string;
    icone: string = 'md-key';
    usuario: Array<number> = new Array<number>();
}

export class Estatistica{
    titulo: string;
    data: string;
    usuario: number;

    constructor(data: string, usuario: number, titulo: string){
        this.titulo = titulo;
        this.data = data.toLowerCase();
        this.usuario = usuario;
    }
}