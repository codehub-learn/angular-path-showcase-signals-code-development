import {Component, computed, effect, signal} from '@angular/core';

@Component({
  selector: 'app-person-viewer',
  templateUrl: './person-viewer.component.html',
  styleUrls: ['./person-viewer.component.scss']
})
export class PersonViewerComponent {
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
  currentFullNameSignal = computed(() => {
    return this.persons[this.currentIndexSignal()].firstname + " " + this.persons[this.currentIndexSignal()].lastname;
  });

  constructor() {
    // effect is mainly used for logging, saving to local storage, analytics etc.;
    // also, in certain cases you may want to keep the effectRef so that you can stop it or destroy it when you no longer
    // want it to run
    let effectRef = effect(() => {
      console.log(`Full Name: ${this.currentFullNameSignal()}`);
    });
    //effectRef.destroy();
  }

  updateCurrent(action: 'previous' | 'next') {
    if (action === 'previous' && this.currentIndexSignal() > 0) {
      this.currentIndexSignal.update(index => index - 1);
    } else if (action === 'next' && this.currentIndexSignal() < this.persons.length - 1) {
      this.currentIndexSignal.update(index => index + 1);
    }
  }
}
