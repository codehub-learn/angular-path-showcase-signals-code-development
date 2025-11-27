import {Component, computed, OnInit, signal, Signal} from '@angular/core';
import {NewItemAdderComponent} from "./components/new-item-adder/new-item-adder.component";
import {ShoppingListComponent} from "./components/shopping-list/shopping-list.component";
import {ShoppingCardService} from "./services/shopping-card.service";

@Component({
  selector: 'app-component-communication',
  imports: [
    NewItemAdderComponent,
    ShoppingListComponent
  ],
  templateUrl: './component-communication.component.html',
  styleUrl: './component-communication.component.scss',
})
export class ComponentCommunicationComponent implements OnInit {
  numberOfBoughtItems: Signal<number> = signal(0);

  constructor(protected shoppingCardService: ShoppingCardService) {
  }

  ngOnInit() {
    this.numberOfBoughtItems = computed(() => this.shoppingCardService.shoppingCart().filter((i) => i.bought).length);
  }
}
