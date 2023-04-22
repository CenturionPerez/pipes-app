export enum Color {// 0, 1, 2, 3, 4... 
    rojo, negro, azul, verde
}

export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: Color;
}