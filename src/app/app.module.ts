import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUserComponent } from './add-user/add-user.component';
import { YoutubenavComponent } from './youtubenav/youtubenav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserVideosComponent } from './user-videos/user-videos.component';
import { AddMyvideosComponent } from './add-myvideos/add-myvideos.component';
import { MyvideosComponent } from './myvideos/myvideos.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    YoutubenavComponent,
    HomeComponent,
    LoginComponent,
    UserVideosComponent,
    AddMyvideosComponent,
    MyvideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
