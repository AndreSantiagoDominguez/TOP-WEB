import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectPageComponent } from './object-page/object-page.component';
import { ObjectCardComponent } from './object-page/object-card/object-card.component';
import { FormsModule } from '@angular/forms';
import { ObjectFormComponent } from './object-page/object-form/object-form.component';
import { UserModule } from '../user/user.module';




@NgModule({
  declarations: [
    ObjectPageComponent,
    ObjectCardComponent,
    ObjectFormComponent    
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    
    
  ],
  exports: [  
    ObjectPageComponent
  ]
})
export class ObjectModule { }
