export interface User {
    id:  number;
    nombre: string;
    correo: string,
    cargo: string,
    departamento: string,
    oficina: string,
    estadoCuenta: string
}

export interface DataUser {
    token: string;
    user: User;
}