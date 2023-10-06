import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UserListItemComponent} from "./user-list-item/user-list-item.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RoundButtonComponent} from "./round-button/round-button.component";
import { RouterModule } from '@angular/router';
import {UserFormComponent} from "./user-form/user-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import {UserListComponent} from "./user-list/user-list.component";

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    UserListItemComponent,
    FontAwesomeModule,
    RoundButtonComponent,
    RouterModule.forRoot([
      {path: '', component: UserListComponent},
      {path: 'user-form/:id', component: UserFormComponent},
      {path: 'user-form', component: UserFormComponent}
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
