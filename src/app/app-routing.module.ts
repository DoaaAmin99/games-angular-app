import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllComponent } from './components/all/all.component';
import { PlatformsComponent } from './components/platforms/platforms.component';
import { SortByComponent } from './components/sort-by/sort-by.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { GameDetailsComponent } from './components/game-details/game-details.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent,title:'Home'},
  {path:'all', canActivate:[AuthGuard],component:AllComponent,title:'All'},
  {path:'platforms/:platform',canActivate:[AuthGuard], component:PlatformsComponent,title:'Platforms'},
  {path:'sortBy/:sorted',canActivate:[AuthGuard], component:SortByComponent,title:'SortBy'},
  {path:'categories/:category', canActivate:[AuthGuard],component:CategoriesComponent,title:'Categories'},
  {path:'gameDetails/:id', canActivate:[AuthGuard],component:GameDetailsComponent,title:'gameDetails'},
  {path:'login',component:LoginComponent,title:'Login'},
  {path:'register',component:RegisterComponent,title:'Register'},
  {path:'**',component:NotFoundComponent,title:'Not-Found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
