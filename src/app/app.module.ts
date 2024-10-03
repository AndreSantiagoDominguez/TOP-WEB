import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ObjectModule } from './object/object.module'; 

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ObjectModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }