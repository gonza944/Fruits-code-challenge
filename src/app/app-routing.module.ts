import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FruitsComponent } from './fruits-module/fruits/fruits.component';

const routes: Routes = [
  // I decided to use angular router because as I asume the app will grow
  // and more than one component will be created,
  // It s the best way to implement redirections and lazy loading. 
  // Also, as I have only one functionality it is the default one in the router.
  { path: '', component: FruitsComponent }
];

@NgModule({
  // Agular router allows a single page app to redirect to different parts of the page with URL navigation
  // Without having to do a postback. Although it's not truly necesary in the excercise if the app
  // grows it will be handy
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
