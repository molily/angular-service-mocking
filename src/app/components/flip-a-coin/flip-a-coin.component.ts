import { Component } from '@angular/core';

import { FlipACoinService } from 'src/app/services/flip-a-coin.service';

@Component({
  selector: 'app-flip-a-coin',
  templateUrl: './flip-a-coin.component.html',
})
export class FlipACoinComponent {
  public result: boolean | null = null;

  constructor(private flipACoinService: FlipACoinService) {}

  flipACoin() {
    this.result = this.flipACoinService.flipACoin();
  }
}
