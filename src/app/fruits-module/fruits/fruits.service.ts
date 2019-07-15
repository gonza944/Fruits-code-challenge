import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IFruit } from './i-fruit';

@Injectable({
  //ProvideIn we are telling angular which injector will create a instance of this service
  providedIn: 'root'
})
export class FruitsService {

  private fruits: BehaviorSubject<IFruit[]> = new BehaviorSubject([]);

  constructor() { }

  // I take advantage of typescript get syntax to return the public observable of the fruits
  /**
   * Getter for the Fruits observable
   */
  get fruits$(): Observable<IFruit[]> {
    return this.fruits.asObservable();
  }

  /**
   * Return the Fruits list
   */
  fetchFruits(): void {
    // As I don't have an API and for the challenge porpuses I will mock the response, In a real
    // App, here should be implemented the logic to retrieve the fruits.
    this.fruits.next([
      { name: 'Orange', color: 'Orange' },
      { name: 'Lemon', color: 'Yellow' },
      { name: 'Strawberry', color: 'Red' },
      { name: 'Apple', color: 'Green' },
    ]);
  }
}
