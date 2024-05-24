import { Component } from '@angular/core';
import { JokerModel} from "../joker/models/joker.model";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myJoker: JokerModel[] = [];
  createModel(){
    this.myJoker.push(new JokerModel('Joker is the best social media',
      "https://www.silicon.fr/wp-content/uploads/2021/09/AdobeStock_91595358-684x513.jpeg",
      new Date(),
      this.getRandomInt(0,100)));
  }

  private getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
