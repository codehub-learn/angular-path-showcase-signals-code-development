import {Component, inject} from '@angular/core';
import {NewToDoItemAdderComponent} from "./components/new-to-do-item-adder/new-to-do-item-adder.component";
import {ToDoListComponent} from "./components/to-do-list/to-do-list.component";
import {TodosStore} from "./store/todos.store";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-to-do',
  imports: [
    NewToDoItemAdderComponent,
    ToDoListComponent,
    NgClass
  ],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss',
})
export class ToDoComponent {
  toDoStore: any = inject(TodosStore);
}
