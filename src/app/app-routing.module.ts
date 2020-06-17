import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmographyComponent } from './filmography/filmography.component';
import { ProjectsComponent } from './projects/projects.component';
import { UpcomingprojectsComponent } from './upcomingprojects/upcomingprojects.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SocialConnectComponent } from './social-connect/social-connect.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'filmography',component:FilmographyComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'upcomingprojects',component:UpcomingprojectsComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'socialconnect',component:SocialConnectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
