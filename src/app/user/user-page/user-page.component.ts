import { Component } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  isLoggedIn = false;
  userData: UserModel | null = null;

  constructor(private userService: UserService) {
    this.checkAuth();
  }

  checkAuth() {
    const user = localStorage.getItem('currentUser');
    this.isLoggedIn = !!user;
    this.userData = user ? JSON.parse(user) : null;
  }

  handleAuthSuccess(userData: UserModel) {
    this.isLoggedIn = true;
    this.userData = userData;
    localStorage.setItem('currentUser', JSON.stringify(userData));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
    this.userData = null;
  }

  onUserUpdated(updatedUser: UserModel) {
    this.userData = updatedUser; 
    localStorage.setItem('currentUser', JSON.stringify(updatedUser)); 
  }
}
