import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AllComponent } from './components/all/all.component';
import { PlatformsComponent } from './components/platforms/platforms.component';
import { SortByComponent } from './components/sort-by/sort-by.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AllComponent,
    PlatformsComponent,
    SortByComponent,
    CategoriesComponent,
    GameDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
