import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FruitsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
