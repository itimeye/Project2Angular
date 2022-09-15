import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MiniRegisterComponent } from './mini-register/mini-register.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { BContainerComponent } from './b-container/b-container.component';
import { BHeaderComponent } from './b-header/b-header.component';
import { BNavComponent } from './b-nav/b-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    LoginComponent,
    RegisterComponent,
    MiniRegisterComponent,
    BusinessesComponent,
    BContainerComponent,
    BHeaderComponent,
    BNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
