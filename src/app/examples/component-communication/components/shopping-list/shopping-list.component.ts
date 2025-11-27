import {Component} from '@angular/core';
import {ShoppingCardService} from "../../services/shopping-card.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-shopping-list',
  imports: [
    NgClass
  ],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent {
  shoppingList;

  constructor(private shoppingCardService: ShoppingCardService) {
    this.shoppingList = this.shoppingCardService.shoppingCart
  }

  changeBuyStatus(itemToUpdate: any) {
    this.shoppingList.update((arr) =>
      arr.map((item) => {
        if (item.id === itemToUpdate.id) {
          return {
            ...itemToUpdate,
            bought: !itemToUpdate.bought,
          }
        }
        return item;
      }),
    );
  }
}
