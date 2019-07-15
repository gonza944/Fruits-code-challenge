import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsComponent } from './fruits.component';
import { configureTestSuite } from 'ng-bullet';
import { MatIconModule } from '@angular/material';
import { IFruit } from './i-fruit';

describe('FruitsComponent', () => {
  let component: FruitsComponent;
  let fixture: ComponentFixture<FruitsComponent>;
  let mockedFruits: IFruit[];

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [FruitsComponent],
      imports: [MatIconModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('view Buttons event handlers', () => {
    it('Should reorder the correct fruit up', () => {

      mockedFruits = [
        { name: 'Lemon', color: 'Yellow' },
        { name: 'Orange', color: 'Orange' },
        { name: 'Strawberry', color: 'Red' },
        { name: 'Apple', color: 'Green' },
      ];

      component.handleUpButtonClicked(1);

      expect(component.orderedFruits$.value).toEqual(mockedFruits);
    });

    it('Should reorder the correct fruit down', () => {

      const mockedFruits = [
        { name: 'Orange', color: 'Orange' },
        { name: 'Strawberry', color: 'Red' },
        { name: 'Lemon', color: 'Yellow' },
        { name: 'Apple', color: 'Green' },
      ];

      component.handleDownButtonClicked(1);

      expect(component.orderedFruits$.value).toEqual(mockedFruits);

    })
  })
});
