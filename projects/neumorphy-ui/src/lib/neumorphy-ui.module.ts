import { NgModule } from '@angular/core';
import { NeumorphyUIComponent } from './neumorphy-ui.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { MainComponent } from './main/main.component';
import { RowComponent } from './row/row.component';

const COMPONENTS = [
  CardComponent,
  ButtonComponent,
  MainComponent,
  RowComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    NeumorphyUIComponent,
  ],
  imports: [
  ],
  exports: [
    ...COMPONENTS,
    NeumorphyUIComponent
  ]
})
export class NeumorphyUIModule { }