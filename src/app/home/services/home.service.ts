import { Injectable } from "@angular/core";
import { JokerModel} from "../../joker/models/joker.model";

@Injectable({
  providedIn: "root",
})

export class HomeService {
  public joker : JokerModel[] = [];

  SetJokerModal(joker : JokerModel) {
    this.joker.unshift(joker);
  }

  GetModalIndex(){
   return this.joker.length;
  }
}
