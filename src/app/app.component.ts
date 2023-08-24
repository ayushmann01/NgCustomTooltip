import { Component } from '@angular/core';
import { TooltipComponent } from './partials/tooltip/tooltip.component';
import { InputData } from './customTooltip/interfaces/tooltip';
import { TooltipPosition } from './customTooltip/utils/constants';
import { PositionOptions } from './customTooltip/interfaces/tooltip-config';

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

  tooltipPosition: PositionOptions = 'bottom'; // set default tooltip position to bottom

  positions = Object.values(TooltipPosition).filter((p: any) => isNaN(p));

  toolTipComponent = TooltipComponent;
}

