import { Injectable } from '@angular/core';
import { UserModel } from '../user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private storageKey = 'users';

  constructor() { }

  getUsers(): UserModel[] {
    const users = localStorage.getItem(this.storageKey);
    return users ? JSON.parse(users) : [];
  }

  addUser(user: UserModel): void {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  updateUser(updatedUser: UserModel): void {
    let users = this.getUsers();
    users = users.map(user => user.idUser === updatedUser.idUser ? updatedUser : user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  deleteUser(id: number): void {
    let users = this.getUsers();
    users = users.filter(user => user.idUser !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }
}
