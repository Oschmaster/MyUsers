import { Injectable } from '@angular/core';
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  public addUser(){

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
    }
  }

  public editUser(user: User){

  }
}
