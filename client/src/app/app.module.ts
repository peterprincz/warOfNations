import { SocketService } from './service/SocketService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { PlayerTwoComponent } from './player-two/player-two.component';
import { RouterModule, Routes } from '@angular/router';
import { PlayerOneComponent } from './player-one/player-one.component';
import { IndexComponent } from './index/index.component';

const appRoutes: Routes = [
  {path: 'playerone', component: PlayerOneComponent},
  {path: 'playertwo', component: PlayerTwoComponent},
  {path: '**', component: IndexComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerTwoComponent,
    PlayerOneComponent,
    IndexComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
