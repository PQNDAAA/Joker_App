import { Component, OnInit, Input } from '@angular/core';
import {JokerModel} from "./models/joker.model";
import {IonicModule} from "@ionic/angular";

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

  likeBooleanStatus!: boolean;
  likeTextStatus!: string;

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
