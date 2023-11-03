import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTooltipDirective } from './directives/addTooltip/add-tooltip.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { TooltipComponent } from '../partials/tooltip/tooltip.component';

@NgModule({
  declarations: [AddTooltipDirective],
  imports: [CommonModule, OverlayModule],
  exports: [AddTooltipDirective],
  entryComponents: [TooltipComponent]
})
export class CustomTooltipModule {}
