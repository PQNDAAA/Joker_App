import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {SigninComponent} from "../signin/signin.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
    IonicModule,
    RouterLinkActive,
    RouterLink
  ],
  standalone: true
})
export class NavbarComponent  implements OnInit {

  constructor(private mc: ModalController) { }

  ngOnInit() {}

  async openModal(){
    const modal = await this.mc.create({
      component: SigninComponent,
    })
    return await modal.present();
  }
}
