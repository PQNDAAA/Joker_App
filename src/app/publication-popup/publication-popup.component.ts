import { Component, NgModule } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {IonicModule} from "@ionic/angular";
import {JokerModel} from "../joker/models/joker.model";
import {HomeService} from "../home/services/home.service";
import {FormsModule} from "@angular/forms";
import {PhotoService} from "../services/photo.service";

@Component({
  selector: 'app-publication-popup',
  templateUrl: './publication-popup.component.html',
  styleUrls: ['./publication-popup.component.scss'],
  imports: [
    IonicModule,
    FormsModule
  ],
  standalone: true
})
export class PublicationPopupComponent {

  constructor(private mc: ModalController, private hs: HomeService, public ps: PhotoService) { }

  textareavalue!: string;

  closePopup(){
    this.mc.dismiss();
  }
  addModal(){
    this.hs.SetJokerModal(new JokerModel(this.textareavalue,
      "https://www.silicon.fr/wp-content/uploads/2021/09/AdobeStock_91595358-684x513.jpeg",
      new Date(),
      0));
    console.log("publication added!");
    this.closePopup();
  }
  addPhotoToGallery(){
    this.ps.addNewToGallery();
  }
}
