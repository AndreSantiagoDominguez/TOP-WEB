import { Component, Input, Output,EventEmitter } from '@angular/core';
import { UserModel } from '../../user-model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  @Input() user: UserModel | null = null; 
  @Output() userUpdated = new EventEmitter<UserModel>(); 


  isEditing = false;
  name: string = '';
  email: string = '';

  constructor() { }

  ngOnInit() {
    
    if (this.user) {
      this.name = this.user.name;
      this.email = this.user.email;
    }
  }

  onEditProfile() {
    this.isEditing = true; 
  }

  onSubmitEdit() {
    if (this.user) {
      const updatedUser: UserModel = {
        ...this.user, 
        name: this.name,
        email: this.email
      };

      this.userUpdated.emit(updatedUser);
      this.isEditing = false; 
    }
  }

  cancelEdit() {
    this.isEditing = false;
  }
}
