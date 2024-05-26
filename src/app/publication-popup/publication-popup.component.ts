import { Component, NgModule } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {IonicModule} from "@ionic/angular";
import {JokerModel} from "../joker/models/joker.model";
import {HomeService} from "../home/services/home.service";
import {FormsModule} from "@angular/forms";
import {PhotoService} from "../services/photo.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-publication-popup',
  templateUrl: './publication-popup.component.html',
  styleUrls: ['./publication-popup.component.scss'],
  imports: [
    IonicModule,
    FormsModule,
    NgIf
  ],
  standalone: true
})
export class PublicationPopupComponent {

  constructor(private mc: ModalController, private hs: HomeService, public ps: PhotoService) { }

  textAreaDescriptionValue!: string;
  textAreaNameValue!:string;
  index = this.hs.GetModalIndex();

  closePopup(){
    this.mc.dismiss();
  }
  addModal(){
    this.hs.SetJokerModal(new JokerModel(this.textAreaNameValue,this.textAreaDescriptionValue,
      "https://picsum.photos/80/80?random=" + (this.hs.GetModalIndex() - 1),
      new Date(),
      0));
    console.log("publication added!");
    this.closePopup();
    console.log(this.hs.GetModalIndex() - 1 );
    console.log(this.hs.GetModalIndex());
  }
  addPhotoToGallery(){
    this.ps.addNewToGallery();
  }
}
