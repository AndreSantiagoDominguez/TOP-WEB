import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectPageComponent } from './object-page/object-page.component';
import { ObjectFormComponent } from './object-page/object-form/object-form.component';
import { ObjectCardComponent } from './object-page/object-card/object-card.component';



@NgModule({
  declarations: [
    ObjectPageComponent,
    ObjectFormComponent,
    ObjectCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ObjectModule { }
