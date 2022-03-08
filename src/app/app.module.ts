import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './components/contact/contact.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { HttpClientModule } from '@angular/common/http';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { HomeComponent } from './routes/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ProjectsComponent,
    SkillsComponent,
    AboutMeComponent,
    ContactComponent,
    ContactMeComponent,
    CertificateComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    IvyCarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
