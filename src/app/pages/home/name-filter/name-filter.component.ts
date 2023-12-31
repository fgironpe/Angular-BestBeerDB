import { transition } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';
import { BeerService } from 'src/app/core/services/beer.service';

@Component({
  selector: 'app-name-filter',
  templateUrl: './name-filter.component.html',
  styleUrls: ['./name-filter.component.scss']
})
export class NameFilterComponent {
  @Output() beerNameEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private beerService: BeerService) {}

  filterByName(event: Event) {
    const target = event.target as HTMLInputElement;
    this.beerService.beerName = target.value;
    this.beerNameEvent.emit(target.value);
  }

}
