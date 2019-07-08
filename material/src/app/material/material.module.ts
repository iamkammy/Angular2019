import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatButtonToggleModule, MatIconModule, MatBadgeModule} from '@angular/material';

const MaterailComponents=[
  MatButtonModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule
]

@NgModule({

  imports: [MaterailComponents],
  exports: [MaterailComponents]
})
export class MaterialModule { }
