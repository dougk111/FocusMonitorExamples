import {Component, ChangeDetectorRef, NgZone, ElementRef, ViewChild} from '@angular/core';
import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'example-component',
  templateUrl: 'example-component.html',
  styleUrls: ['example-component.css'],
})
export class ExampleComponent {
  focused$: Observable<boolean>;
  counter: number = 0;  
  constructor(
    elementRef: ElementRef,
    focusMonitor: FocusMonitor,
  ) {
    this.focused$ = focusMonitor.monitor(
      elementRef,
      true,
    ).pipe(
      startWith(null),
      map(o => {
        console.log(o);
        this.counter = this.counter + 1;
        console.log('counter: ', this.counter)
        return !!o;
      }),
    )
  }
  
  foods = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'}
  ];

}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */