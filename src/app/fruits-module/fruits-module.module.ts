import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitsComponent } from './fruits/fruits.component';
import { MatButtonModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [FruitsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [FruitsComponent],
  entryComponents: [FruitsComponent]
})
export class FruitsModuleModule { }
