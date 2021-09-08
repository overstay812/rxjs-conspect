import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import {
  filter,
  map,
  scan,
  switchMap,
  take,
  takeWhile,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss'],
})
export class OperatorComponent implements OnInit {
  constructor() {}

  // operators
  public intervalStart(): void {
    const stream$ = interval(500).pipe(
      take(8),
      map((value) => value * 3),
      filter((value) => value % 2 === 0),
      tap((value) => console.log(`tap: ${value}`)),
      takeWhile((value) => value < 20),
      scan((prev, cur) => prev + cur, 0)
    );

    stream$.subscribe({
      next: (res) => console.log(`next: ${res}`),
      complete: () => console.log('complete'),
    });
  }

  // switchMap
  public intervalStartToggle(): void {
    fromEvent(document, 'click')
      .pipe(
        switchMap((event) => {
          return interval(200).pipe(
            take(5),
            scan((prev, cur) => prev + cur, 0)
          );
        })
      )
      .subscribe({
        next: (res) => console.log(`next: ${res}`),
        complete: () => console.log('complete'),
      });
  }
  ngOnInit(): void {}
}
