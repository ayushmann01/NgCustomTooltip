import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TooltipComponent } from './partials/tooltip/tooltip.component';
import { CustomTooltipModule } from './customTooltip/customtooltip.module';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [AppComponent, TooltipComponent],
  imports: [BrowserModule, CustomTooltipModule, FormsModule, OverlayModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TooltipComponent],
})
export class AppModule {}
