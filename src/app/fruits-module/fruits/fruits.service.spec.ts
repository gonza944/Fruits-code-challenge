import { TestBed } from '@angular/core/testing';

import { FruitsService } from './fruits.service';

describe('FruitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FruitsService = TestBed.get(FruitsService);
    expect(service).toBeTruthy();
  });

  describe('fetching Fruits', () => {
    it('Should retrieve the fruits list', () => {
      const mockedFruits = [
        { name: 'Orange', color: 'Orange' },
        { name: 'Lemon', color: 'Yellow' },
        { name: 'Strawberry', color: 'Red' },
        { name: 'Apple', color: 'Green' },
      ];
      const service: FruitsService = TestBed.get(FruitsService);
      service.fruits$.subscribe((fruits) => {
        expect(fruits).toEqual(mockedFruits);
      })
      service.fetchFruits();
    })
  })
});
