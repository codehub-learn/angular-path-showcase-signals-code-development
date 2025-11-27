import { Routes } from '@angular/router';
import {EshopComponentComponent} from './examples/eshop-component/eshop-component.component';
import {PersonViewerComponent} from './examples/person-viewer/person-viewer.component';
import {RandomNumberGeneratorComponent} from './examples/random-number-generator/random-number-generator.component';
import {ComponentCommunicationComponent} from './examples/component-communication/component-communication.component';
import {ItemSelectorComponent} from './examples/item-selector/item-selector.component';
import {PrintCurrentDateComponent} from './examples/print-current-date/print-current-date.component';
import {ToDoComponent} from './examples/ngrx/to-do/to-do.component';
import {
  SimpleSignalSetterGetterComponent
} from './examples/simple-signal-setter-getter/simple-signal-setter-getter.component';


export const routes: Routes = [
  {path: "", redirectTo: "simple-signal-setter-getter", pathMatch: "full"},
  {path: "simple-signal-setter-getter", component: SimpleSignalSetterGetterComponent},
  {path: "eshop", component: EshopComponentComponent},
     {path: "person-viewer", component: PersonViewerComponent},
    {path: "random-number-generator", component: RandomNumberGeneratorComponent},
     {path: "component-communication", component: ComponentCommunicationComponent},
   {path: "item-selector", component: ItemSelectorComponent},
    {path: "print-current-date", component: PrintCurrentDateComponent},
  {path: "ngrx", component: ToDoComponent}
];
