import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterDevelopersComponent } from './welcoming/components/register-developers/register-developers.component';
import { WelcomeComponent } from './welcoming/components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterDevelopersComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
