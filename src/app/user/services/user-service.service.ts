import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private storageKey = 'users';
  private currentUserKey = 'currentUser';

  // Crear un BehaviorSubject para el usuario actual
  private currentUserSubject = new BehaviorSubject<UserModel | null>(this.getCurrentUser());

  // Exponer el observable para que los componentes puedan suscribirse
  currentUser$ = this.currentUserSubject.asObservable();

  constructor() { }

  // Obtener todos los usuarios
  getUsers(): UserModel[] {
    const users = localStorage.getItem(this.storageKey);
    return users ? JSON.parse(users) : [];
  }

  // Registrar nuevo usuario
  registerUser(newUser: UserModel): boolean {
    const users = this.getUsers();
    if (users.some(user => user.email === newUser.email)) {
      return false; // Email ya registrado
    }
    newUser.idUser = Date.now(); // Genera un ID único
    users.push(newUser);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
    return true;
  }

  // Iniciar sesión
  loginUser(email: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem(this.currentUserKey, JSON.stringify(user));
      this.currentUserSubject.next(user); // Emitir el usuario actual
      return true;
    }
    return false;
  }

  // Cerrar sesión
  logoutUser(): void {
    localStorage.removeItem(this.currentUserKey);
    this.currentUserSubject.next(null); // Emitir null cuando se cierra sesión
  }

  // Obtener usuario actual
  getCurrentUser(): UserModel | null {
    const user = localStorage.getItem(this.currentUserKey);
    return user ? JSON.parse(user) : null;
  }

  setUser(updatedUser: UserModel): void {
    localStorage.setItem(this.currentUserKey, JSON.stringify(updatedUser));
  }

  // Método público para actualizar el usuario actual
  updateCurrentUser(user: UserModel | null) {
    this.currentUserSubject.next(user);
    if (user) {
      localStorage.setItem(this.currentUserKey, JSON.stringify(user)); // Guardar el usuario actualizado
    } else {
      localStorage.removeItem(this.currentUserKey); // Limpiar el almacenamiento si es null
    }
  }
}
