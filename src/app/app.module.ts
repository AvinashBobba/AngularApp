import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilmographyComponent } from './filmography/filmography.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { UpcomingprojectsComponent } from './upcomingprojects/upcomingprojects.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SocialConnectComponent } from './social-connect/social-connect.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmographyComponent,
    FooterComponent,
    ProjectsComponent,
    UpcomingprojectsComponent,
    ContactusComponent,
    AboutUsComponent,
    SocialConnectComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
