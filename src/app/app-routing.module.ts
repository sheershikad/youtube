import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMyvideosComponent } from './add-myvideos/add-myvideos.component';
import { AuthGuardService } from './auth-guard.service';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { MyvideoComponent } from './myvideo/myvideo.component';
import { MyvideosComponent } from './myvideos/myvideos.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [
  {
    path:'',
    component:WelcomepageComponent,
  },
  {
    path:'login',
    component:LoginComponent,

  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'details/:id',
    component:DetailsComponent,
  },

  {
    path:'add-myvideos',
    component:AddMyvideosComponent,
  },
  {
    path:'myvideos',
    component:MyvideosComponent,
  }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
