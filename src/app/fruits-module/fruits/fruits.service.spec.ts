import { TestBed } from '@angular/core/testing';
import { FruitsService } from './fruits.service';
import { async } from 'q';


describe('FruitsService', () => {
  let service: FruitsService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(FruitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetching Fruits', async(() => {
    it('Should retrieve the fruits list', () => {
      const mockedFruits = [
        { name: 'Orange', color: 'Orange' },
        { name: 'Lemon', color: 'Yellow' },
        { name: 'Strawberry', color: 'Red' },
        { name: 'Apple', color: 'Green' },
      ];

      service.fetchFruits();

      service.fruits$.subscribe((fruits) => {
        expect(fruits).toEqual(mockedFruits);
      })
    })
  }))
});
