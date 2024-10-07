import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectPageComponent } from './object/object-page/object-page.component';
import { VgPageComponent } from './video-game/vg-page/vg-page.component';
import { UserPageComponent } from './user/user-page/user-page.component';

const routes: Routes = [
  {path: '',component:UserPageComponent},
  {path: 'Objetos',component:ObjectPageComponent},
  {path: 'games',component:VgPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
