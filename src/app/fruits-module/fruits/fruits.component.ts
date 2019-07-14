import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FruitsService } from './fruits.service';
import { BehaviorSubject, pipe, Observable, Subject } from 'rxjs';
import { IFruit } from './i-fruit';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FruitsComponent implements OnInit, OnDestroy {

  orderedFruits$: BehaviorSubject<IFruit[]> = new BehaviorSubject([]);
  // I create a subject to handle the fruits new order, since the app should be able to handle
  // new fruits as well as ordering I need a variable to handle both posibilities
  private onComponentDestruction$: Subject<void> = new Subject();
  private fruitService: FruitsService;

  // I import the service with dependency Injection, allowing me to create a singleton service and
  // use the service methods as well as in the future use the fruit service to share data with 
  // siblings component (this thanks to the DI)
  constructor(fruitService: FruitsService) {
    this.fruitService = fruitService;
    // Subscribe to new changes in the fruits. The takeUntil will complete the subscription when an
    // observable passed as arguments emits, it's perfect to unsubscribe all the subscription just
    // before the component is destroyed, that way we prevent memory leaks.
    this.fruitService.fruits$
      .pipe(
        takeUntil(this.onComponentDestruction$),
      )
      .subscribe(fruits => {
        this.orderedFruits$.next(fruits);
      });
  }

  ngOnInit() {
    this.fruitService.fetchFruits();
  }

  ngOnDestroy(): void {
    // Unsubscribing all the observables... We should not forget to complete the subject!!
    this.onComponentDestruction$.next();
    this.onComponentDestruction$.complete();
  }

}
