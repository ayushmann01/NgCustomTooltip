import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTooltipDirective } from './directives/addTooltip/add-tooltip.directive';

@NgModule({
  declarations: [AddTooltipDirective],
  imports: [CommonModule],
  exports: [AddTooltipDirective],
})
export class CustomTooltipModule {}
