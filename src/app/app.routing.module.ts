import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [

  {path: "home", component: HomeComponent},
  {path: "habilidades", component: SkillsComponent},
  {path: "contacto", component: ContactComponent},
  {path: "**", redirectTo: "home"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
