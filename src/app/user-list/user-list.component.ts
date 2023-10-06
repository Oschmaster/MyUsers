import {Component, inject, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {User} from "../user";
import {UserServiceService} from "../user-service.service";
import {UserListItemComponent} from "../user-list-item/user-list-item.component";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserListItemComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  userService: UserServiceService = inject(UserServiceService);
  UserList: User[] = []

  async ngOnInit() {
    this.userService.getAllUsers().subscribe((userList: User[]) => this.UserList = userList);
  }

  public handleDeleteUser(id: number){
    this.UserList = this.UserList.filter(user => user.id != id);
    this.userService.deleteUser(id)
  }
}
