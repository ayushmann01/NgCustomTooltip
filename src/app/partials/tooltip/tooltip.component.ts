import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Tooltip } from 'src/app/customTooltip/interfaces/tooltip';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  animations: [
    // trigger('tooltip', [
    //   transition(':enter', [
    //     style({ opacity: 0 }),
    //     animate(300, style({ opacity: 1 })),
    //   ]),
    //   transition(':leave', [animate(300, style({ opacity: 0 }))]),
    // ]),
  ],
})
export class TooltipComponent implements Tooltip, OnInit {
  // tooltipData!: InputData;
  @Input() text = '';
  left: number = 0;
  top: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
