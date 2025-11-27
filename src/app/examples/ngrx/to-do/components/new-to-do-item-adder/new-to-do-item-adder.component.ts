import {Component, inject, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TodosStore} from "../../store/todos.store";

@Component({
  selector: 'app-new-to-do-item-adder',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './new-to-do-item-adder.component.html',
  styleUrl: './new-to-do-item-adder.component.scss',
})
export class NewToDoItemAdderComponent {
  todoToAdd = signal("");
  toDoStore = inject(TodosStore)

  add() {
    this.toDoStore.addToDo(this.todoToAdd());
  }
}
