import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss'],
})
export class UserprofileComponent  implements OnInit {

  constructor(private mc: ModalController) { }

  ngOnInit() {}

  closeModal(){
    this.mc.dismiss();
  }

}
