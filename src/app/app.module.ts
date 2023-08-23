import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TooltipComponent } from './partials/tooltip/tooltip.component';
import { CustomTooltipModule } from './customTooltip/customtooltip.module';

@NgModule({
  declarations: [AppComponent, TooltipComponent],
  imports: [BrowserModule, CustomTooltipModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
