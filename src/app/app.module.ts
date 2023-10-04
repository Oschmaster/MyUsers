import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UserListItemComponent} from "./user-list-item/user-list-item.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RoundButtonComponent} from "./round-button/round-button.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserListItemComponent,
    FontAwesomeModule,
    RoundButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
