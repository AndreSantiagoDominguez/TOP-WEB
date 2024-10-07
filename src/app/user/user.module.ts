import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserPageComponent } from './user-page/user-page.component';
import { UserProfileComponent } from './user-page/user-profile/user-profile.component';
import { UserFormComponent } from './user-page/user-form/user-form.component';



@NgModule({
  declarations: [
    UserPageComponent,
    UserProfileComponent,
    UserFormComponent
   
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UserPageComponent
  ],
})
export class UserModule { }
