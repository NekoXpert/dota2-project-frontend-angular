import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './components/intro/intro.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { TorneoCreateComponent } from './components/torneo/torneo-create/torneo-create.component';
import { EquipoCreateComponent } from './components/equipo/equipo-create/equipo-create.component';
import { EquipoListComponent } from './components/equipo/equipo-list/equipo-list.component';
import { EquipoUpdateComponent } from './components/equipo/equipo-update/equipo-update.component';

import { JugadorCreateComponent } from './components/jugador/jugador-create/jugador-create.component';
import { JugadorListComponent } from './components/jugador/jugador-list/jugador-list.component';
import { JugadorUpdateComponent } from './components/jugador/jugador-update/jugador-update.component';
import { TorneoListComponent } from './components/torneo/torneo-list/torneo-list.component';
import { TorneoUpdateComponent } from './components/torneo/torneo-update/torneo-update.component';



const routes: Routes = [

  { path: 'intro', component: IntroComponent },
  {
    path: 'auth', children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },
  {
    path: '', component: MainLayoutComponent, children: [
      { path: 'torneo/create', component: TorneoCreateComponent },
      { path: 'torneo/update', component: TorneoUpdateComponent },
      { path: 'torneo', component: TorneoListComponent },
      { path: 'equipo/create', component: EquipoCreateComponent },
      { path: 'equipo/update', component: EquipoUpdateComponent },
      { path: 'equipo', component: EquipoListComponent },
      { path: 'jugador/create', component: JugadorCreateComponent },
      { path: 'jugador/update', component: JugadorUpdateComponent },
      { path: 'jugador', component: JugadorListComponent }
    ]
  },
 
    { path: '', redirectTo: 'intro', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
