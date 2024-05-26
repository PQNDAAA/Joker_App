import { Component, OnInit, Input } from '@angular/core';
import {JokerModel} from "./models/joker.model";
import {IonicModule} from "@ionic/angular";
import {UserprofileComponent} from "../userprofile/userprofile.component";
import {ModalController} from "@ionic/angular";
import {PublicationPopupComponent} from "../publication-popup/publication-popup.component";

@Component({
  selector: 'app-joker',
  templateUrl: './joker.component.html',
  styleUrls: ['./joker.component.scss'],
  imports: [
    IonicModule
  ],
  standalone: true
})
export class JokerComponent implements OnInit{
  @Input() joker!: JokerModel;
  userProfile = UserprofileComponent;

  constructor(private mc: ModalController) {
  }

  likeBooleanStatus!: boolean;
  likeTextStatus!: string;

  async openModal(){
    const modal =  await this.mc.create(
      {component : UserprofileComponent}
    )
    return await modal.present();
  }

  ngOnInit() {
    this.likeBooleanStatus = false;
    this.likeTextStatus = 'Not liked!';
  }
  onAddNumber(){
    if(!this.likeBooleanStatus){
      this.likeBooleanStatus = true;
      this.joker.likeCount++;
      this.likeTextStatus = 'Liked!'
    } else {
      this.likeBooleanStatus = false;
      this.joker.likeCount--;
      this.likeTextStatus = 'Not Liked!';
    }
  }
}
