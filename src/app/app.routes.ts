import { Routes } from '@angular/router';
import {SimpleSignalSetterGetter} from './examples/simple-signal-setter-getter/simple-signal-setter-getter';
import {Eshop} from './examples/eshop/eshop';
import {PersonViewer} from './examples/person-viewer/person-viewer';

export const routes: Routes = [
  {path: "", redirectTo: "simple-signal-setter-getter", pathMatch: "full"},
  {path: "simple-signal-setter-getter", component: SimpleSignalSetterGetter},
  {path: "eshop", component: Eshop},
     {path: "person-viewer", component: PersonViewer},
  /*   {path: "random-number-generator", component: RandomNumberGeneratorComponent},
     {path: "component-communication", component: ComponentCommunicationComponent},
     {path: "item-selector", component: ItemSelectorComponent},
     {path: "print-current-date", component: PrintCurrentDateComponent},*/
];
