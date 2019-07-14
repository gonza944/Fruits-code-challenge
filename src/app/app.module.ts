import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { FruitsModuleModule } from './fruits-module/fruits-module.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FruitsModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LandingComponent],
  entryComponents: [LandingComponent]
})
export class AppModule { }
