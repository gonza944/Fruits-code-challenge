import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitsComponent } from './fruits/fruits.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [FruitsComponent],
  imports: [
    CommonModule,
  ],
  exports: [FruitsComponent],
  entryComponents: [FruitsComponent]
})
export class FruitsModuleModule { }
