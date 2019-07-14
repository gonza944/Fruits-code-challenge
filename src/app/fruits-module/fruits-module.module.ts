import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitsComponent } from './fruits/fruits.component';

@NgModule({
  declarations: [FruitsComponent],
  imports: [
    CommonModule
  ],
  exports: [FruitsComponent],
  entryComponents: [FruitsComponent]
})
export class FruitsModuleModule { }
