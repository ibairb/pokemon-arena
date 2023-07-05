import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlayerComponent } from './components/create-player/create-player.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { FightComponent } from './components/fight/fight.component';

const routes: Routes = [{
  path:'',
  component: HomeComponent
},
{
  path:'home',
  component: HomeComponent
},
{
  path:'create-player',
  component: CreatePlayerComponent
},
{
  path:'form',
  component: FormComponent
},
{
  path:'fight',
  component: FightComponent
},
{
  path:'**',
  component: HomeComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
