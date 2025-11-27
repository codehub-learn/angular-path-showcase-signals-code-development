import {Component, input, output} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-items-list',
  imports: [
    NgClass
  ],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss',
})
export class ItemsListComponent {
  items = input<any[]>();
  itemSelected = output<string>();

  selectItem(item: any) {
    this.itemSelected.emit(item);
  }
}
