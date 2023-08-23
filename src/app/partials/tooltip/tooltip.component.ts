import { Component, OnInit } from '@angular/core';
import { InputData, Tooltip } from 'src/app/customTooltip/interfaces/tooltip';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
})
export class TooltipComponent implements Tooltip, OnInit {
  tooltipData: InputData | null = null;
  left: number = 0;
  bottom: number = 0;
  right: number = 0;
  top: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
