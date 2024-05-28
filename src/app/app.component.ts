import { Component, OnInit } from '@angular/core';
import { JokerModel} from "./joker/models/joker.model";
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  users: any = [];
  newUser = {id: null, lastname: "", firstname:"", email: ""};

  constructor(private us: UserService) {}

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    this.us.getUsers().subscribe(data => {
      this.users = data;
    })
  }
  addUser(){
    this.us.addUser(this.newUser).subscribe(data => {
      this.us.getUsers();
    });
  }

}
