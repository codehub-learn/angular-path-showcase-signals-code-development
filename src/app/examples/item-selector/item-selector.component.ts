import {Component, effect, signal} from '@angular/core';
import {ItemsListComponent} from "./components/items-list/items-list.component";
import {SelectedItemComponent} from "./components/selected-item/selected-item.component";

@Component({
  selector: 'app-item-selector',
  imports: [
    ItemsListComponent,
    SelectedItemComponent
  ],
  templateUrl: './item-selector.component.html',
  styleUrl: './item-selector.component.scss',
})
export class ItemSelectorComponent {
  items = signal([
    {
      id: Math.random(),
      title: "Item A",
      marked: false
    },
    {
      id: Math.random(),
      title: "Item B",
      marked: false
    },
    {
      id: Math.random(),
      title: "Item C",
      marked: false
    },
    {
      id: Math.random(),
      title: "Item D",
      marked: false
    }, {
      id: Math.random(),
      title: "Item E",
      marked: false
    }
    , {
      id: Math.random(),
      title: "Item F",
      marked: false
    }
  ]);
  selectedItem = signal(null);
  modelChangeEffectRef = effect(() => {
    console.log("Item list modified!", this.items());
  })

  setSelectedItem(item: any) {
    this.selectedItem.set(item);
  }
}
