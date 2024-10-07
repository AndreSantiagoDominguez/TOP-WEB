import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ObjectModule } from './object/object.module';
import { UserModule } from "./user/user.module"; 

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ObjectModule,
    UserModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }