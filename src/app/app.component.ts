import {Component, inject, OnInit} from '@angular/core';
import {UserListItemComponent} from "./user-list-item/user-list-item.component";
import {User} from "./user";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {RoundButtonComponent} from "./round-button/round-button.component";
import {UserServiceService} from "./user-service.service";
import {RouterModule} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userService: UserServiceService = inject(UserServiceService);
  title = 'MyUsers';
  UserList: User[] = []

  constructor() {

  }

  async ngOnInit() {
    let response = await fetch("https://dummyjson.com/users");
    let data = await response.json();
    const { users } = data;
    let userUser: User[] = [...users];
    console.log(userUser);
    this.UserList = [...this.UserList, ...userUser];
  }

  public handleDeleteUser(id: number){
    this.UserList = this.UserList.filter(user => user.id != id);
    this.userService.deleteUser(id)
  }

  faPlus = faPlus;
}
