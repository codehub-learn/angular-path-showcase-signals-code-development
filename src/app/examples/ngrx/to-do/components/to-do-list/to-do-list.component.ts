import {Component, inject} from '@angular/core';
import {TodosStore} from "../../store/todos.store";
import {NgClass} from "@angular/common";
import {TodoItem} from "../../store/todos.model";

@Component({
  selector: 'app-to-do-list',
  imports: [
    NgClass
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
})
export class ToDoListComponent {
  toDoStore = inject(TodosStore);

  toggleToDo(todo: TodoItem) {
    this.toDoStore.toggleToDo(todo.id)
  }
}
