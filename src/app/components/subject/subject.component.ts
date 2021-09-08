import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
  constructor() {}

  // subject
  public subjectStart(): void {
    const stream$ = new Subject();
    stream$.subscribe((res) => console.log(res));

    stream$.next('first');
    stream$.next('second');
    stream$.next('third');
  }

  // behaviorSubject
  public behaviorSubjectStart(): void {
    const stream$ = new BehaviorSubject('default');
    stream$.next('first');
    stream$.subscribe((res) => console.log(res)); // to ask Andry more about the result when you are moving the subscribe in the equeue
    stream$.next('second');
    stream$.next('third');
  }

  // replaySubject
  public replaySubjectStart(): void {
    const stream$ = new ReplaySubject(2);
    stream$.next('first');
    stream$.next('second');
    stream$.next('third');
    stream$.subscribe((res) => console.log(res)); // will return two last values
  }

  ngOnInit(): void {}
}
