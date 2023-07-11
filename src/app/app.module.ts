/* Author: Felipe reyes  => { Nekosor } Github*/
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IntroComponent } from './components/intro/intro.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { JugadorCreateComponent } from './components/jugador/jugador-create/jugador-create.component';
import { JugadorUpdateComponent } from './components/jugador/jugador-update/jugador-update.component';
import { JugadorListComponent } from './components/jugador/jugador-list/jugador-list.component';
import { EquipoCreateComponent } from './components/equipo/equipo-create/equipo-create.component';
import { EquipoListComponent } from './components/equipo/equipo-list/equipo-list.component';
import { EquipoUpdateComponent } from './components/equipo/equipo-update/equipo-update.component';
import { TorneoCreateComponent } from './components/torneo/torneo-create/torneo-create.component';
import { TorneoListComponent } from './components/torneo/torneo-list/torneo-list.component';
import { TorneoUpdateComponent } from './components/torneo/torneo-update/torneo-update.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    LoginComponent,
    RegisterComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    JugadorCreateComponent,
    JugadorUpdateComponent,
    JugadorListComponent,
    EquipoCreateComponent,
    EquipoListComponent,
    EquipoUpdateComponent,
    TorneoCreateComponent,
    TorneoListComponent,
    TorneoUpdateComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
