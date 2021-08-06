import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlipACoinService {
  flipACoin() {
    return Math.random() < 0.5
  }
}
