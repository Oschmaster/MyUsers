import {Component, OnInit} from '@angular/core';
import {UserListItemComponent} from "./user-list-item/user-list-item.component";
import {User} from "./user";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {RoundButtonComponent} from "./round-button/round-button.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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

  faPlus = faPlus;
}
