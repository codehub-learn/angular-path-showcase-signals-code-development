import {Component, computed, effect, signal} from '@angular/core';

@Component({
  selector: 'app-person-viewer',
  imports: [],
  templateUrl: './person-viewer.html',
  styleUrl: './person-viewer.css',
})
export class PersonViewer {
  persons = [
    {
      firstname: "Ioannis",
      lastname: "Daniil",
    },
    {
      firstname: "Manos",
      lastname: "Xanos",
    },
    {
      firstname: "Mary",
      lastname: "Very",
    }
  ];
  currentIndexSignal = signal(0);
  currentUser = computed(() => {
    return this.persons[this.currentIndexSignal()];
  });
  // .tap()
  // analytics, logging, localStorage
  onIndexChange = effect(() => {
    console.log(`The index has been updated: ${this.currentIndexSignal()}`);
  });

  updateCurrent(action: "previous" | "next") {
    if(action === "previous") {
      if(this.currentIndexSignal() > 0){
        this.currentIndexSignal.update((i) => i - 1);
      }
    } else if(action === "next") {
      if(this.currentIndexSignal() < this.persons.length - 1) {
        this.currentIndexSignal.update((i) => i + 1);
      }
    }
  }
}
