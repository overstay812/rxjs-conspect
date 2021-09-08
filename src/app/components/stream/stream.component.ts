import { Component, OnInit } from '@angular/core';
import { from, interval, Observable, of, range, timer } from 'rxjs';
import { map, scan, take, takeLast, tap, timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss'],
})
export class StreamComponent implements OnInit {
  constructor() {}

  //     of
  public ofStart(): void {
    const stream$ = of(1, 2, 3, 4);
    stream$.subscribe((res) => console.log(res));
  }

  //    from
  public fromStart(): void {
    const array: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const stream$ = from(array);
    stream$.subscribe((res) => console.log(res));
  }

  // Observable

  public observableStart(): void {
    const stream$ = new Observable((observer) => {
      observer.next('first value');
      observer.complete();
      observer.error('something went wrong');
    })
      // .subscribe(
      //   (res) => console.log(res),
      //   (err) => console.log(err),
      //   () => console.log('complete')
      // );
      .subscribe({
        next: (res) => console.log(res),
        error: (err) => console.log(err),
        complete: () => console.log('complete'),
      });
  }

  //     fromEvent
  // public fromEventStart(): void {
  // }

  //     interval
  public intervalStart(): void {
    const stream$ = interval(500)
      .pipe()
      .subscribe((res) => console.log(res));

    setTimeout(() => stream$.unsubscribe(), 5000);
  }

  //     timer
  public timerStart(): void {
    timer(2500).subscribe((res) => console.log('done'));
  }

  //     timer
  public rangeStart(): void {
    range(3, 15).subscribe((res) => console.log(res));
  }

  ngOnInit(): void {}
}
