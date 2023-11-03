import { Component, OnDestroy, OnInit } from '@angular/core';
import { TooltipComponent } from './partials/tooltip/tooltip.component';
import { InputData } from './customTooltip/interfaces/tooltip';
import { TooltipPosition } from './customTooltip/utils/constants';
import { PositionOptions } from './customTooltip/interfaces/tooltip-config';
import { Observable, Subscription, interval, map, merge, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ng-custom-tooltip';

  data: InputData = {
    name: 'Namaste 🙂',
    city: 'Noida',
  };

  tooltipPosition: PositionOptions =
    TooltipPosition.bottom as unknown as PositionOptions; // set default tooltip position to bottom

  positions = Object.values(TooltipPosition).filter((p: any) => isNaN(p));

  toolTipComponent = TooltipComponent;
  intervalSubscription: Subscription | null = null;

  createObservable(): Observable<number> {
    return interval(1000);
  }

  createAnotherObservable(): Observable<number> {
    return interval(2000);
  }

  ngOnInit(): void {
    let anotherObservable = this.createAnotherObservable();

    this.intervalSubscription = this.createObservable()
      .pipe(
        map((val) => {
          anotherObservable.pipe(take(1)).subscribe(v => console.log('take value', v));
          return 'hello! ' + val;
        })
      )
      .subscribe((value) => {
        console.log(value);
      });

    // let mergedObs = merge(this.intervalSubscription, anotherObservable)
    //   .pipe(
    //     map((val) => {
    //       return val;
    //     })
    //   )
    //   .subscribe((value) => {
    //     console.log('combined value', value);
    //   });
  }

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
  }
}
