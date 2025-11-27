import {Component, input, model} from '@angular/core';

@Component({
  selector: 'app-selected-item',
  imports: [],
  templateUrl: './selected-item.component.html',
  styleUrl: './selected-item.component.scss',
})
export class SelectedItemComponent {
  item = input.required<any>(); // required forces the parent component to provide a value
  itemsList = model<any[]>();


  markItem() {
    this.item().marked = true;
    this.itemsList.update((items) =>
      items!.map((itemToBeMarked) => {
        if (itemToBeMarked.id === this.item().id) {
          return {
            ...itemToBeMarked,
            marked: true,
          }
        }
        return itemToBeMarked;
      }),
    )
  }
}
