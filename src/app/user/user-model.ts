export interface UserModel {

        idUser: number;
        name: string;
        email: string;
        password: string; 
        isLoggedIn?: boolean; // Para verificar si está logueado

}
