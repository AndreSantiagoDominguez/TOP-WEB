import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgPageComponent } from './vg-page/vg-page.component';
import { VgFormComponent } from './vg-page/vgform/vgform.component';
import { FormsModule } from '@angular/forms';
import { VgCardCategoriaComponent } from './vg-page/vg-card-categoria/vg-card-categoria.component';



@NgModule({
  declarations: [
    VgPageComponent,
    VgCardCategoriaComponent,
    VgFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],exports:[
    VgPageComponent
  ]
})
export class VideoGameModule { }
