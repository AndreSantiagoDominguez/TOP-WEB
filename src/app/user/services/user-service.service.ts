import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private storageKey = 'users';
  private currentUserKey = 'currentUser';

  private currentUserSubject = new BehaviorSubject<UserModel | null>(this.getCurrentUser());

  currentUser$ = this.currentUserSubject.asObservable();

  constructor() { }

  
  getUsers(): UserModel[] {
    const users = localStorage.getItem(this.storageKey);
    return users ? JSON.parse(users) : [];
  }

  
  registerUser(newUser: UserModel): boolean {
    const users = this.getUsers();
    if (users.some(user => user.email === newUser.email)) {
      return false; 
    }
    newUser.idUser = Date.now(); 
    users.push(newUser);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
    return true;
  }

 
  loginUser(email: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem(this.currentUserKey, JSON.stringify(user));
      this.currentUserSubject.next(user); 
      return true;
    }
    return false;
  }

  logoutUser(): void {
    localStorage.removeItem(this.currentUserKey);
    this.currentUserSubject.next(null); 
  }

  getCurrentUser(): UserModel | null {
    const user = localStorage.getItem(this.currentUserKey);
    return user ? JSON.parse(user) : null;
  }

  setUser(updatedUser: UserModel): void {
    localStorage.setItem(this.currentUserKey, JSON.stringify(updatedUser));
  }

  updateCurrentUser(user: UserModel | null) {
    this.currentUserSubject.next(user);
    if (user) {
      localStorage.setItem(this.currentUserKey, JSON.stringify(user)); 
    } else {
      localStorage.removeItem(this.currentUserKey); 
    }
  }
}
