import { Component,ViewChild, Input  } from '@angular/core';
import { JokerModel} from "../joker/models/joker.model";
import { ModalController} from "@ionic/angular";
import { PublicationPopupComponent } from "../publication-popup/publication-popup.component";
import { HomeService} from "./services/home.service";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private mc:ModalController, private hs : HomeService) {}

  myJoker: JokerModel[] = this.hs.joker;

  async openModal(){
    const modal = await this.mc.create(
      {component : PublicationPopupComponent}
    )
    return await modal.present();
  }

  private getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
