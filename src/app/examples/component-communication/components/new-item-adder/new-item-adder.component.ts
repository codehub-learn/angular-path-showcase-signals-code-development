import {Component, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ShoppingCardService} from "../../services/shopping-card.service";

@Component({
  selector: 'app-new-item-adder',
  imports: [
    FormsModule
  ],
  templateUrl: './new-item-adder.component.html',
  styleUrl: './new-item-adder.component.scss',
})
export class NewItemAdderComponent {
  itemToAdd = signal("");

  constructor(private shoppingCardService: ShoppingCardService) {
  }

  add() {
    this.shoppingCardService.shoppingCart.update((arr) => [...arr, {
      id: Math.random(),
      title: this.itemToAdd(),
      bought: false
    }]);
  }
}
