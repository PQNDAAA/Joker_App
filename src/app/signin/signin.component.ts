import { Component, OnInit } from '@angular/core';
import { ModalController} from "@ionic/angular";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {UserService} from "../user.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  imports: [
    IonicModule,
    FormsModule
  ],
  standalone: true
})
export class SigninComponent  implements OnInit {
  constructor(private mc: ModalController, private us: UserService) { }

  users: any = [];
  newUser = {id: null, lastname: "", firstName: "", email: ""};

  ngOnInit() {
    this.getUsers()
  }

  closeModal(){
    this.mc.dismiss();
  }
  getUsers(){
    this.us.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  addUser(){
    this.us.addUser(this.newUser).subscribe(data =>{
      this.us.getUsers();
      });
  }

}
