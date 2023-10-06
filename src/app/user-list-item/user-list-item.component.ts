import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {User} from "../user";
import {RoundButtonComponent} from "../round-button/round-button.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-user-list-item',
  standalone: true,
    imports: [CommonModule, RoundButtonComponent, RouterLink],
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent {
  @Input() User!: User;
  @Output() onDeleteUser = new EventEmitter<number>();

  public isActive = false;
  public onClick(event: Event){
    this.isActive = !this.isActive;
  }

  public onDeleteClick(id: number){
    this.onDeleteUser.emit(id);
  }
}
