import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service.service';
import { UserModel } from '../../user-model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Output() authSuccess = new EventEmitter<UserModel>(); 

  isLoginMode = true; 
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) { }

  onSubmit() {
    if (this.isLoginMode) {
      this.login();
    } else {
      this.register();
    }
  }

  login() {
    if (this.userService.loginUser(this.email, this.password)) {
      const currentUser = this.userService.getCurrentUser(); // Obtener el usuario actual
      if (currentUser) { // Verifica si currentUser no es null
        this.authSuccess.emit(currentUser); // Emitir el usuario
        this.router.navigate(['/user-profile']);
        this.clearForm();
      } else {
        alert('Error al obtener el usuario actual');
      }
    } else {
      alert('Credenciales incorrectas');
    }
  }

  register() {
    const newUser: UserModel = { name: this.name, email: this.email, password: this.password, idUser: 0 }; 
    if (this.userService.registerUser(newUser)) {
      this.userService.updateCurrentUser(newUser); 
      this.router.navigate(['/user-profile']);
      this.clearForm();
    } else {
      alert('El email ya está registrado');
    }
  }
  
  

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.clearForm();
  }

  private clearForm() {
    this.name = '';
    this.email = '';
    this.password = '';
  }
}
