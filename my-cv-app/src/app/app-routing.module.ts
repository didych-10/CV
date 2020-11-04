import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SkillsComponent} from "./components/skills/skills.component";
import {EducationComponent} from "./components/education/education.component";
import {PortfolioComponent} from "./components/portfolio/portfolio.component";
import {InfoComponent} from "./components/info/info.component";

const routes: Routes = [
  {
    path: '',
    component: SkillsComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'info',
    component: InfoComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
