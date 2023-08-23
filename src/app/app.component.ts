import { Component } from '@angular/core';
import { TooltipComponent } from './partials/tooltip/tooltip.component';
import { TooltipConfig } from './customTooltip/interfaces/tooltip-config';
import { InputData } from './customTooltip/interfaces/tooltip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-custom-tooltip';

  data: InputData = {
    name: 'user name',
    city: 'Noida',
  };

  toolTipComponent = TooltipComponent;
}

// type InputData = {
//   name: string;
//   city: string;
// };
// export interface Tooltip {
//   left?: number;
//   bottom?: number;
//   top?: number;
//   right?: number;
//   tooltipData: InputData;
// }
