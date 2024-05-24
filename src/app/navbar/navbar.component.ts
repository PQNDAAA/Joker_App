import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {RouterLink, RouterLinkActive} from "@angular/router";

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

  constructor() { }

  ngOnInit() {}

}
