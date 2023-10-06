import {Injectable} from '@angular/core';
import {User} from "./user";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  UserList: BehaviorSubject<User[]>

  constructor() {
    this.UserList = new BehaviorSubject<User[]>([]);
    fetch("https://dummyjson.com/users").then(result => {
          result.json().then((data: { users: any; }) => {
              const {users} = data;
              this.UserList.next([...users]);
          });
    });
  }

  public getAllUsers(): Observable<User[]>{
    return this.UserList;
  }

  public async addUser(value: {
    firstName?: string | null;
    lastName?: string | null;
    gender?: string | null;
    birthDate?: Date | null;
    email?: string | null;
  }){
    const user: User = {
      id: 0,
      firstName: value.firstName || '',
      lastName: value.lastName || '',
      gender: value.gender || '',
      birthDate: value.birthDate || new Date(),
      email: value.email || ''
    };
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    };

    try {
      const response = await fetch("https://dummyjson.com/users/add", options);
      if(response.status != 200){
        console.log(`Failed to add User with id $user.id: Code: $response.status`);
      }
      const data = await response.json()
      user.id = data.id || 0;
    } catch (e) {
      console.log(e);
    }
    this.UserList.next([user, ...this.UserList.getValue()]);

  }

  public async deleteUser(id: number){
    const options = {
      method: 'DELETE'
    };

    try {
      const response = await fetch("https://dummyjson.com/users/" + id.toString(), options);
      if(response.status != 200){
        console.log(`Failed to delete User with id $id: Code: $response.status`);
      }
    } catch (e) {
      console.log(e);
    } finally {
      this.UserList.next(this.UserList.getValue().filter((user) => user.id !== id))
    }
  }

  public getUser(id: number): User | undefined {
      return this.UserList.getValue().find(user => user.id === id);
  }
  public editUser(user: User){
    let tempUserList = this.UserList.getValue();
    this.UserList.next(tempUserList.map((listUser: User) => (user.id === listUser.id)?user:listUser));
  }
}
